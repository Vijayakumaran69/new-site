"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import BaseCanvas from "./webgl/BaseCanvas";

function AboutScene({ scrollProgress }: { scrollProgress: number }) {
  const brandGroup = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const monolithRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const p = scrollProgress;
    const pointer = state.pointer;

    if (brandGroup.current) {
      // Extremely smooth, slow cinematic movement
      brandGroup.current.rotation.y = time * 0.05 + p * Math.PI * 0.8;
      brandGroup.current.position.x = THREE.MathUtils.lerp(1.2, -1.0, p) + pointer.x * 0.2;
      brandGroup.current.position.y = THREE.MathUtils.lerp(0.1, -0.8, p);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.08;
    }
    if (monolithRef.current) {
      monolithRef.current.rotation.y = time * 0.15;
    }
  });

  return (
    <>
      {/* Sleek Calmer Brand Convergence Centerpiece */}
      <group ref={brandGroup} position={[1.2, 0.1, 2.8]}>
        {/* Dark Metallic Monolith Core */}
        <mesh ref={monolithRef}>
          <octahedronGeometry args={[1.6, 2]} />
          <meshStandardMaterial color="#0B0F17" metalness={0.98} roughness={0.04} />
          <mesh>
            <octahedronGeometry args={[1.63, 2]} />
            <meshBasicMaterial color="#38BDF8" wireframe transparent opacity={0.25} />
          </mesh>
        </mesh>

        {/* Minimal Metallic Halo */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.0, 0.06, 32, 120]} />
          <meshStandardMaterial color="#1E293B" metalness={0.95} roughness={0.08} />
        </mesh>
      </group>

      {/* Ambient Micro Dust Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                Array.from({ length: 600 * 3 }, () => (Math.random() - 0.5) * 20)
              ),
              3,
            ]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#94A3B8" transparent opacity={0.35} />
      </points>
    </>
  );
}

export default function AboutCanvas({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <BaseCanvas cameraPos={[0, 0, 8.5]}>
      <AboutScene scrollProgress={scrollProgress} />
    </BaseCanvas>
  );
}
