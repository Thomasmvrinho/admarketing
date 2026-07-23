import { useMemo } from 'react'

// Rendu leger (SVG) du reseau de noeuds, servi sur mobile/tablette a la place
// de la 3D three.js : meme langage visuel (or plat), poids negligeable, zero
// dependance. Anime par une rotation CSS douce (voir .hero-net-spin dans index.css).

const GOLD = '#D4AF37'
const CX = 200
const CY = 200

function buildGraph() {
  // 1 noeud central + un anneau interne + un anneau externe (positions deterministes)
  const nodes = [{ x: CX, y: CY, r: 5, o: 1 }]
  const inner = 5
  const outer = 9
  for (let i = 0; i < inner; i++) {
    const a = (i / inner) * Math.PI * 2 - Math.PI / 2
    nodes.push({ x: CX + Math.cos(a) * 58, y: CY + Math.sin(a) * 58, r: 4, o: 0.9 })
  }
  for (let i = 0; i < outer; i++) {
    const a = (i / outer) * Math.PI * 2 + 0.35
    nodes.push({ x: CX + Math.cos(a) * 116, y: CY + Math.sin(a) * 116, r: 3.2, o: 0.7 })
  }
  // Liens entre noeuds proches (memes regles d'esprit que la version 3D)
  const links = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
      if (d < 96) links.push([i, j])
    }
  }
  return { nodes, links }
}

export default function HeroNetworkFallback() {
  const { nodes, links } = useMemo(buildGraph, [])
  return (
    <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="w-[86%] max-w-[420px] h-auto" role="presentation">
        <g className="hero-net-spin">
          <circle cx={CX} cy={CY} r={124} fill="none" stroke={GOLD} strokeOpacity="0.08" />
          {links.map(([i, j], k) => (
            <line
              key={k}
              x1={nodes[i].x} y1={nodes[i].y}
              x2={nodes[j].x} y2={nodes[j].y}
              stroke={GOLD} strokeOpacity="0.22" strokeWidth="1"
            />
          ))}
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={GOLD} fillOpacity={n.o} />
          ))}
        </g>
      </svg>
    </div>
  )
}
