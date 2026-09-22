"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import BaseCanvas from "./webgl/BaseCanvas";
import { ShieldShader } from "./webgl/Shaders";
import ParticleField from "./webgl/ParticleField";

function CybersecurityInfrastructureScene({ scrollProgress }: { scrollProgress: number }) {
  const infraGroup = useRef<THREE.Group>(null);
  const shieldRef = useRef<THREE.Mesh>(null);
  const radarRef = useRef<THREE.Mesh>(null);
  const threatStreamRef = useRef<THREE.Points>(null);

  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const shieldMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(ShieldShader.uniforms),
      vertexShader: ShieldShader.vertexShader,
      fragmentShader: ShieldShader.fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }, []);

  // Threat vectors stream towards defensive nodes
  const { threatPositions, threatColors } = useMemo(() => {
    const count = 900;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const red = new THREE.Color("#EF4444");
    const amber = new THREE.Color("#F59E0B");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = -12 - Math.random() * 12;

      const c = Math.random() > 0.35 ? red : amber;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { threatPositions: pos, threatColors: col };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const p = scrollProgress;
    const pointer = state.pointer;

    // Update GLSL shield material parameters
    if (shieldMaterial) {
      shieldMaterial.uniforms.uTime.value = time;
      shieldMaterial.uniforms.uOpacity.value = THREE.MathUtils.lerp(0.35, 0.9, p);
    }

    if (infraGroup.current) {
      // Scroll-driven camera journey through live security topology
      infraGroup.current.rotation.y = time * 0.1 + p * Math.PI * 1.6;
      infraGroup.current.rotation.x = Math.sin(time * 0.08) * 0.12 + pointer.y * 0.15;
      infraGroup.current.position.x = THREE.MathUtils.lerp(1.4, -1.2, p) + pointer.x * 0.35;
      infraGroup.current.position.y = THREE.MathUtils.lerp(0.1, -1.2, p);
    }

    if (radarRef.current) {
      radarRef.current.rotation.z = -time * 0.7;
    }

    // Threat stream progression towards defensive barriers
    if (threatStreamRef.current) {
      const geom = threatStreamRef.current.geometry;
      const posAttr = geom.attributes.position;
      if (!posAttr) return;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < 900; i++) {
        const iz = i * 3 + 2;
        arr[iz] += 0.14;
        if (arr[iz] > 5) {
          arr[iz] = -12 - Math.random() * 10;
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Live Enterprise Security Infrastructure & Server Matrix */}
      <group ref={infraGroup} position={[1.4, 0.1, 2.2]}>
        {/* Central Enterprise Server Rack Array */}
        {[-2.0, 0, 2.0].map((xPos, idx) => (
          <group key={idx} position={[xPos, 0, (idx % 2) * -0.9]}>
            <mesh>
              <boxGeometry args={[1.1, 3.4, 0.9]} />
              <meshStandardMaterial color="#0B0F17" metalness={0.96} roughness={0.06} />
            </mesh>
            <mesh position={[0, 0, 0.46]}>
              <planeGeometry args={[1.0, 3.2]} />
              <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.35} />
            </mesh>

            {/* Live Security Monitor Node LEDs */}
            {Array.from({ length: 5 }).map((_, lightIdx) => (
              <mesh
                key={lightIdx}
                position={[0.35, -1.3 + lightIdx * 0.65, 0.47]}
                onPointerOver={() => setHoveredNode(idx * 10 + lightIdx)}
                onPointerOut={() => setHoveredNode(null)}
              >
                <sphereGeometry args={[0.07, 10, 10]} />
                <meshBasicMaterial
                  color={
                    hoveredNode === idx * 10 + lightIdx
                      ? "#EF4444"
                      : lightIdx % 2 === 0
                      ? "#00F0FF"
                      : "#22C55E"
                  }
                />
              </mesh>
            ))}
          </group>
        ))}

        {/* Outer GLSL Enterprise Defensive Energy Shield */}
        <mesh ref={shieldRef}>
          <sphereGeometry args={[3.2, 32, 32]} />
          <primitive object={shieldMaterial} attach="material" />
        </mesh>

        {/* Security Operations Threat Radar Grid */}
        <mesh ref={radarRef} position={[0, 2.5, -1]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.2, 2.26, 48]} />
          <meshBasicMaterial color="#00F0FF" side={THREE.DoubleSide} transparent opacity={0.65} />
        </mesh>

        {/* Security Vector Data Stream Tubes */}
        <mesh rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <torusGeometry args={[3.8, 0.06, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.4} />
        </mesh>
      </group>

      {/* Threat Vector Streams Approaching Defense Grid */}
      <points ref={threatStreamRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[threatPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[threatColors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.85} blending={THREE.AdditiveBlending} />
      </points>

      {/* Ambient Security Field Particles */}
      <ParticleField count={1100} radius={14} color="#0F172A" accentColor="#00F0FF" scrollProgress={scrollProgress} />
    </>
  );
}

export default function CybersecurityCanvas({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <BaseCanvas cameraPos={[0, 0, 8.5]}>
      <CybersecurityInfrastructureScene scrollProgress={scrollProgress} />
    </BaseCanvas>
  );
}
