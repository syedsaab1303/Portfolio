import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useReducedMotion } from 'framer-motion'

const VERT = /* glsl */ `
uniform float uTime;
uniform float uSize;
attribute vec3 aColor;
attribute float aScale;
attribute float aSeed;
varying vec3 vColor;
varying float vTw;

void main() {
  vec3 p = position;
  float r = length(p.xz);

  // differential rotation: inner particles orbit faster
  float ang = uTime * (0.22 / (r + 0.35));
  float c = cos(ang), s = sin(ang);
  p = vec3(p.x * c - p.z * s, p.y, p.x * s + p.z * c);

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(aScale * uSize / -mv.z, 1.0, 60.0);

  vColor = aColor;
  vTw = 0.7 + 0.3 * sin(uTime * (1.2 + aSeed * 2.4) + aSeed * 43.0);
}
`

const FRAG = /* glsl */ `
varying vec3 vColor;
varying float vTw;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv) * 2.0;
  float a = exp(-d * d * 4.5) - 0.02;
  if (a <= 0.0) discard;
  a *= vTw;
  gl_FragColor = vec4(vColor * a, a);
}
`

// tungsten core -> warm white -> cool slate rim
const INNER = [1.0, 0.72, 0.36]
const MID = [0.98, 0.9, 0.78]
const OUTER = [0.42, 0.55, 0.85]
const lerp = (a, b, t) => a + (b - a) * t

function buildGalaxy(count) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const scales = new Float32Array(count)
  const seeds = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const arm = i % 3
    const rr = Math.pow(Math.random(), 0.62)
    const r = 0.12 + rr * 1.95
    const armAng = arm * ((Math.PI * 2) / 3) + r * 1.35
    const ang = armAng + (Math.random() - 0.5) * (0.55 * r + 0.14)

    positions[i * 3] = Math.cos(ang) * r + (Math.random() - 0.5) * 0.09
    positions[i * 3 + 1] = (Math.random() - 0.5) * (0.34 * Math.exp(-r * 1.15) + 0.035)
    positions[i * 3 + 2] = Math.sin(ang) * r + (Math.random() - 0.5) * 0.09

    const t = Math.min(1, Math.max(0, (r - 0.12) / 1.95))
    const [A, B, tt] = t < 0.45 ? [INNER, MID, t / 0.45] : [MID, OUTER, (t - 0.45) / 0.55]
    colors[i * 3] = lerp(A[0], B[0], tt)
    colors[i * 3 + 1] = lerp(A[1], B[1], tt)
    colors[i * 3 + 2] = lerp(A[2], B[2], tt)

    const hot = Math.random() < 0.03
    scales[i] = hot ? 2.6 + Math.random() : 0.6 + Math.random() * 1.2
    if (hot) {
      colors[i * 3] = 1.0
      colors[i * 3 + 1] = 0.85
      colors[i * 3 + 2] = 0.6
    }
    seeds[i] = Math.random()
  }
  return { positions, colors, scales, seeds }
}

function Galaxy() {
  const group = useRef()
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 2600 : 5200
  const { positions, colors, scales, seeds } = useMemo(() => buildGalaxy(count), [count])
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uSize: { value: 11 } }), [])

  useFrame((state, delta) => {
    uniforms.uTime.value += delta
    uniforms.uSize.value = state.size.height * state.gl.getPixelRatio() * 0.013
    // mouse parallax, critically damped
    const g = group.current
    if (g) {
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, state.pointer.y * 0.07, 2, delta)
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, -state.pointer.x * 0.12, 2, delta)
    }
  })

  return (
    <group ref={group}>
      <points frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aColor" args={[colors, 3]} />
          <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
          <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={VERT}
          fragmentShader={FRAG}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

export default function GalaxyCanvas({ active = true }) {
  const reduced = useReducedMotion()
  return (
    <div className="gl-wrap" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        camera={{ fov: 55, position: [0, 1.15, 3.4], near: 0.1, far: 30 }}
        frameloop={reduced ? 'demand' : active ? 'always' : 'never'}
        onCreated={({ camera }) => camera.lookAt(0, -0.05, 0)}
      >
        <color attach="background" args={['#07090e']} />
        <Galaxy />
        {/* multisampling off: points + bloom don't need MSAA, saves a big chunk of GPU time */}
        <EffectComposer multisampling={0}>
          <Bloom mipmapBlur intensity={0.8} luminanceThreshold={0.12} luminanceSmoothing={0.3} radius={0.75} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
