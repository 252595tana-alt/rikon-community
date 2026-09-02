"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  attribute float aScale;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.55 + position.x * 1.4 + position.z) * 0.06;
    p.x += cos(uTime * 0.38 + position.y * 2.0) * 0.035;
    p.z += sin(uTime * 0.28 + position.x * 0.8) * 0.04;
    vec4 modelViewPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
    float pulse = 0.88 + 0.18 * sin(uTime * 0.9 + aScale * 2.1);
    gl_PointSize = aScale * pulse * (20.0 / max(0.2, -modelViewPosition.z));
    vAlpha = 0.46 + 0.32 * sin(uTime * 0.75 + aScale);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    float glow = smoothstep(0.5, 0.0, distanceToCenter);
    float core = smoothstep(0.12, 0.0, distanceToCenter);
    gl_FragColor = vec4(uColor, (glow * 0.7 + core) * vAlpha);
  }
`;

function seeded(index: number) {
  const value = Math.sin(index * 943.73 + 17.11) * 43758.5453;
  return value - Math.floor(value);
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const particles = useRef<THREE.Points>(null);
  const strands = useRef<THREE.LineSegments>(null);
  const ring = useRef<THREE.LineSegments>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const strandMaterial = useRef<THREE.LineBasicMaterial>(null);
  const ringMaterial = useRef<THREE.LineBasicMaterial>(null);

  const particleGeometry = useMemo(() => {
    const count = 920;
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      const progress = index / count;
      const angle = progress * Math.PI * 14 + seeded(index) * 0.8;
      const stream = seeded(index + 12);
      const radius = 0.78 + stream * 1.25;
      const pull = Math.pow(Math.abs(progress - 0.5) * 2, 1.35);
      positions[index * 3] = Math.cos(angle) * radius + (progress - 0.5) * 4.8;
      positions[index * 3 + 1] = Math.sin(angle) * radius * (0.34 + pull * 0.35);
      positions[index * 3 + 2] = (seeded(index + 48) - 0.5) * 1.2 - pull * 0.45;
      scales[index] = 0.65 + seeded(index + 99) * 2.4;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return geometry;
  }, []);

  const strandGeometry = useMemo(() => {
    const vertices: number[] = [];
    for (let strand = 0; strand < 13; strand += 1) {
      const y = (strand - 6) * 0.24;
      const points = [
        new THREE.Vector3(-3.4, y * 1.5, -0.5 + seeded(strand) * 0.4),
        new THREE.Vector3(-1.7, y * 0.8 + Math.sin(strand) * 0.25, 0.15),
        new THREE.Vector3(-0.5, y * 0.2, 0.38 - seeded(strand + 5) * 0.35),
        new THREE.Vector3(0.35, -y * 0.08, 0.2),
        new THREE.Vector3(1.5, -y * 0.65 + Math.cos(strand) * 0.18, -0.1),
        new THREE.Vector3(3.3, -y * 1.28, -0.45 + seeded(strand + 8) * 0.35),
      ];
      const curve = new THREE.CatmullRomCurve3(points);
      const sampled = curve.getPoints(72);
      for (let point = 0; point < sampled.length - 1; point += 1) {
        vertices.push(sampled[point].x, sampled[point].y, sampled[point].z);
        vertices.push(sampled[point + 1].x, sampled[point + 1].y, sampled[point + 1].z);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  const ringGeometry = useMemo(() => {
    const vertices: number[] = [];
    const count = 120;
    for (let index = 0; index < count; index += 1) {
      const current = (index / count) * Math.PI * 2;
      const next = ((index + 1) / count) * Math.PI * 2;
      vertices.push(Math.cos(current) * 0.92, Math.sin(current) * 0.92, 0.55);
      vertices.push(Math.cos(next) * 0.92, Math.sin(next) * 0.92, 0.55);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, []);

  useFrame((state, delta) => {
    if (material.current) material.current.uniforms.uTime.value += delta;

    const time = state.clock.getElapsedTime();
    const easing = 1 - Math.exp(-delta * 2.8);

    if (group.current) {
      const targetY = -0.08 + state.pointer.x * 0.2 + Math.sin(time * 0.18) * 0.06;
      const targetX = 0.06 - state.pointer.y * 0.12 + Math.cos(time * 0.22) * 0.035;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, easing);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, easing);
      group.current.rotation.z = -0.04 + Math.sin(time * 0.16) * 0.025;
    }

    if (particles.current) {
      particles.current.rotation.z = Math.sin(time * 0.2) * 0.025;
      particles.current.position.x = Math.sin(time * 0.32) * 0.08;
      particles.current.position.y = Math.cos(time * 0.28) * 0.045;
    }

    if (strands.current) {
      strands.current.rotation.z = Math.sin(time * 0.24) * 0.018;
      strands.current.position.y = Math.sin(time * 0.38) * 0.045;
    }

    if (ring.current) {
      const pulse = 1 + Math.sin(time * 0.72) * 0.035;
      ring.current.scale.setScalar(pulse);
    }

    if (strandMaterial.current) {
      strandMaterial.current.opacity = 0.28 + Math.sin(time * 0.55) * 0.07;
    }

    if (ringMaterial.current) {
      ringMaterial.current.opacity = 0.58 + Math.sin(time * 0.72) * 0.12;
    }
  });

  return (
    <group ref={group} rotation={[0.06, -0.08, -0.04]}>
      <points ref={particles} geometry={particleGeometry}>
        <shaderMaterial
          ref={material}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{ uTime: { value: 0 }, uColor: { value: new THREE.Color("#62a98c") } }}
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </points>
      <lineSegments ref={strands} geometry={strandGeometry}>
        <lineBasicMaterial ref={strandMaterial} color="#5f9f85" transparent opacity={0.28} blending={THREE.NormalBlending} />
      </lineSegments>
      <lineSegments ref={ring} geometry={ringGeometry}>
        <lineBasicMaterial ref={ringMaterial} color="#df8f77" transparent opacity={0.64} blending={THREE.NormalBlending} />
      </lineSegments>
      <pointLight position={[0, 0, 2]} intensity={1.4} color="#bcebd5" />
    </group>
  );
}

export default function ConnectionField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      frameloop="always"
    >
      <Scene />
    </Canvas>
  );
}
