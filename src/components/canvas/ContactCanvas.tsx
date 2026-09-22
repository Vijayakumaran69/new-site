"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import BaseCanvas from "./webgl/BaseCanvas";

function ContactScene({ scrollProgress }: { scrollProgress: number }) {
  const structureGroup = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const shardsGroup = useRef<THREE.Group>(null);

  // Generate shard offsets
  const shardOffsets = useMemo(() => {
    return Array.from({ length: 16 }, () => ({
      direction: new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      ),
      rotationAxis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize(),
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const p = scrollProgress;
    const pointer = state.pointer;

    if (structureGroup.current) {
      structureGroup.current.rotation.y = time * 0.1 + p * Math.PI;
      structureGroup.current.position.x = THREE.MathUtils.lerp(1.2, 0, p) + pointer.x * 0.2;
      structureGroup.current.position.y = THREE.MathUtils.lerp(0.2, -0.6, p);
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.25;
      const glowScale = 1.0 + Math.sin(time * 2.0) * 0.05 + p * 0.3;
      coreRef.current.scale.set(glowScale, glowScale, glowScale);
    }

    // Magnetic locking of scattered shards on scroll
    if (shardsGroup.current) {
      const lockFactor = 1.0 - Math.min(p * 1.5, 1.0); // 1 = scattered, 0 = locked into core
      shardsGroup.current.children.forEach((shard, idx) => {
        const offset = shardOffsets[idx];
        shard.position.x = offset.direction.x * lockFactor;
        shard.position.y = offset.direction.y * lockFactor;
        shard.position.z = offset.direction.z * lockFactor;

        shard.rotation.x = time * 0.5 * lockFactor;
        shard.rotation.y = time * 0.3 * lockFactor;
      });
    }
  });

  return (
    <>
      {/* Stabilized Future Core Structure */}
      <group ref={structureGroup} position={[1.2, 0.2, 3.0]}>
        {/* Central Monolithic Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.4, 2]} />
          <meshStandardMaterial color="#0B0F17" metalness={0.95} roughness={0.08} />
          <mesh>
            <icosahedronGeometry args={[1.44, 2]} />
            <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.5} />
          </mesh>
        </mesh>

        {/* Magnetic Assembling Shards */}
        <group ref={shardsGroup}>
          {shardOffsets.map((_, idx) => (
            <mesh key={idx}>
              <tetrahedronGeometry args={[0.25, 0]} />
              <meshStandardMaterial color={idx % 2 === 0 ? "#00F0FF" : "#38BDF8"} metalness={0.9} roughness={0.1} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Atmospheric Energy Dust */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                Array.from({ length: 800 * 3 }, () => (Math.random() - 0.5) * 16)
              ),
              3,
            ]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#00F0FF" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
      </points>
    </>
  );
}

export default function ContactCanvas({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <BaseCanvas cameraPos={[0, 0, 8.5]}>
      <ContactScene scrollProgress={scrollProgress} />
    </BaseCanvas>
  );
}
