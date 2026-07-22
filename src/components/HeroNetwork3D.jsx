import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, useLayoutEffect } from 'react'
import * as THREE from 'three'

const NODE_COUNT = 30
const RADIUS = 1.3
const LINK_DIST = 0.92 // seuil de connexion entre deux nœuds
const MAX_LINKS = 4 // liens max par nœud (évite la surcharge visuelle)
const GOLD = '#D4AF37'

function Network() {
  const outer = useRef()
  const spin = useRef()
  const instRef = useRef()

  const reduceMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  )

  // Génération unique : positions des nœuds, tailles, et segments de liens.
  const { nodes, scales, linePositions } = useMemo(() => {
    const nodes = []
    const scales = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const r = RADIUS * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      )
      // tailles variées → quelques gros "hubs", beaucoup de petits nœuds
      scales.push(0.6 + Math.pow(Math.random(), 2) * 1.1)
    }

    // Construit les liens : paires les plus proches d'abord, plafonnées par nœud.
    const linkCount = new Array(NODE_COUNT).fill(0)
    const pairs = []
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const d = nodes[i].distanceTo(nodes[j])
        if (d < LINK_DIST) pairs.push([d, i, j])
      }
    }
    pairs.sort((a, b) => a[0] - b[0])
    const segs = []
    for (const [, i, j] of pairs) {
      if (linkCount[i] >= MAX_LINKS || linkCount[j] >= MAX_LINKS) continue
      segs.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z)
      linkCount[i]++
      linkCount[j]++
    }

    return { nodes, scales, linePositions: new Float32Array(segs) }
  }, [])

  // Place les sphères (position + échelle) dans l'instancedMesh.
  useLayoutEffect(() => {
    const dummy = new THREE.Object3D()
    nodes.forEach((v, i) => {
      dummy.position.copy(v)
      const s = scales[i]
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      instRef.current.setMatrixAt(i, dummy.matrix)
    })
    instRef.current.instanceMatrix.needsUpdate = true
  }, [nodes, scales])

  useFrame((state, delta) => {
    if (spin.current) {
      spin.current.rotation.y += delta * (reduceMotion ? 0.015 : 0.06)
    }
    if (outer.current && !reduceMotion) {
      outer.current.rotation.x = THREE.MathUtils.lerp(
        outer.current.rotation.x,
        state.pointer.y * 0.25,
        0.04
      )
      outer.current.rotation.y = THREE.MathUtils.lerp(
        outer.current.rotation.y,
        state.pointer.x * 0.25,
        0.04
      )
    }
  })

  return (
    <group ref={outer}>
      <group ref={spin}>
        {/* Liens */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color={GOLD} transparent opacity={0.28} depthWrite={false} />
        </lineSegments>

        {/* Nœuds */}
        <instancedMesh ref={instRef} args={[undefined, undefined, NODE_COUNT]}>
          <sphereGeometry args={[0.035, 14, 14]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.95} />
        </instancedMesh>
      </group>
    </group>
  )
}

export default function HeroNetwork3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.4], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <Network />
    </Canvas>
  )
}
