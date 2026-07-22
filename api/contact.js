// Fonction serverless Vercel : reçoit une demande de devis et envoie UNE notification au cabinet
// (contact@ad-marketing.pro) via Resend. Le cabinet répond ensuite lui-même au prospect.
// Aucun email automatique n'est envoyé au prospect.
// Env vars requises : RESEND_API_KEY (+ optionnel : UPSTASH_REDIS_REST_URL / _TOKEN pour le rate-limit).
// Le domaine ad-marketing.pro doit être vérifié dans Resend pour l'expéditeur.
import { Resend } from 'resend'
import { rateLimit, clientIp } from './_ratelimit.js'

const resend = new Resend(process.env.RESEND_API_KEY)

const OWNER_EMAIL = 'contact@ad-marketing.pro'
const FROM = 'ADMARKETING <contact@ad-marketing.pro>'

// Échappement HTML : neutralise toute injection dans le corps des emails.
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Notification interne : tableau récapitulatif de la demande.
function buildNotifHtml(d) {
  const row = (k, v) => v
    ? `<tr><td style="padding:8px 14px;font-weight:600;color:#555;white-space:nowrap;width:150px;vertical-align:top;">${k}</td><td style="padding:8px 14px;color:#111;">${v}</td></tr>`
    : ''
  return `<!DOCTYPE html>
<html lang="fr"><body style="font-family:'Helvetica Neue',Arial,sans-serif;background:#f5f4f1;padding:32px;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.07);">
    <div style="background:#0A0A0B;padding:24px 32px;">
      <span style="color:#D4AF37;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">ADMARKETING</span>
      <h2 style="margin:8px 0 0;color:#fff;font-size:20px;">Nouvelle demande de devis</h2>
    </div>
    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:8px;overflow:hidden;">
        ${row('Nom', escapeHtml(d.name))}
        ${row('Email', `<a href="mailto:${escapeHtml(d.email)}" style="color:#A8842A;">${escapeHtml(d.email)}</a>`)}
        ${row('Téléphone', escapeHtml(d.phone))}
        ${row('Entreprise', escapeHtml(d.company))}
        ${row('Effectif', escapeHtml(d.effectif))}
        ${row('Secteur', escapeHtml(d.secteur))}
        ${row('Service concerné', escapeHtml(d.service))}
        ${row('Échéance', escapeHtml(d.echeance))}
        ${row('Budget envisagé', escapeHtml(d.budget))}
        ${row('Site web', escapeHtml(d.website))}
        ${row('Besoin', escapeHtml(d.message).replace(/\n/g, '<br>'))}
      </table>
      <p style="margin:22px 0 0;font-size:13px;color:#888;">Répondez directement à cet email pour recontacter ${escapeHtml(d.name)}.</p>
    </div>
  </div>
</body></html>`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { form } = req.body ?? {}

  // Honeypot : champ caché jamais rempli par un humain. Si rempli → on simule un succès.
  if (form?.botField) return res.status(200).json({ ok: true })

  // Validation stricte (avant tout appel externe facturé).
  const isStr = (v, max) => typeof v === 'string' && v.trim().length > 0 && v.length <= max
  const emailValid = isStr(form?.email, 254) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  if (!isStr(form?.name, 100) || !emailValid) {
    return res.status(400).json({ error: 'Nom et email valides requis.' })
  }
  if (!isStr(form?.message, 3000)) {
    return res.status(400).json({ error: 'Merci de décrire votre besoin.' })
  }

  const clip = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
  const d = {
    name: clip(form.name, 100),
    email: form.email.trim(),
    phone: clip(form.phone, 30),
    company: clip(form.company, 120),
    effectif: clip(form.effectif, 40),
    secteur: clip(form.secteur, 120),
    service: clip(form.service, 80),
    echeance: clip(form.echeance, 60),
    budget: clip(form.budget, 60),
    website: clip(form.website, 200),
    message: clip(form.message, 3000),
  }

  // Rate-limit : 5 demandes / heure / IP (actif seulement si Upstash est configuré, sinon fail-open).
  const rl = await rateLimit({ key: `contact:${clientIp(req)}`, limit: 5, windowSec: 3600 })
  if (!rl.ok) return res.status(429).json({ error: 'Trop de requêtes. Réessayez dans un moment.' })

  try {
    // Notification au cabinet. On met le prospect en reply-to : un simple "Répondre" le recontacte.
    const { error: notifErr } = await resend.emails.send({
      from: FROM,
      to: OWNER_EMAIL,
      replyTo: d.email,
      subject: `Nouveau devis — ${d.service || 'Demande'} | ${d.name}`,
      html: buildNotifHtml(d),
    })
    if (notifErr) throw new Error(`Resend notif: ${notifErr.message}`)

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] erreur :', err)
    return res.status(500).json({ error: 'Erreur serveur. Réessayez ou écrivez à contact@ad-marketing.pro.' })
  }
}
