"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import BaseCanvas from "./webgl/BaseCanvas";
import ParticleField from "./webgl/ParticleField";

function EduTechKnowledgeScene({ scrollProgress }: { scrollProgress: number }) {
  const learningMatrixGroup = useRef<THREE.Group>(null);
  const corePolyhedronRef = useRef<THREE.Mesh>(null);
  const knowledgeShardsGroup = useRef<THREE.Group>(null);

  // Generate 16 knowledge shards that assemble as user progresses from Learn to Master
  const shardData = useMemo(() => {
    return Array.from({ length: 16 }, (_, idx) => {
      const angle = (idx / 16) * Math.PI * 2;
      return {
        initialOffset: new THREE.Vector3(
          Math.cos(angle) * (3.5 + Math.random() * 1.5),
          Math.sin(angle) * (2.5 + Math.random() * 1.5),
          (Math.random() - 0.5) * 4
        ),
        color: idx % 3 === 0 ? "#00F0FF" : idx % 3 === 1 ? "#8B5CF6" : "#38BDF8",
      };
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const p = scrollProgress;
    const pointer = state.pointer;

    if (learningMatrixGroup.current) {
      learningMatrixGroup.current.rotation.y = time * 0.12 + p * Math.PI * 1.6;
      learningMatrixGroup.current.rotation.x = Math.sin(time * 0.08) * 0.1 + pointer.y * 0.15;
      learningMatrixGroup.current.position.x = THREE.MathUtils.lerp(1.5, -1.1, p) + pointer.x * 0.35;
      learningMatrixGroup.current.position.y = THREE.MathUtils.lerp(0.2, -1.3, p);
    }

    if (corePolyhedronRef.current) {
      corePolyhedronRef.current.rotation.y = time * 0.3;
      corePolyhedronRef.current.rotation.z = time * 0.2;
      // Polyhedron grows in structural complexity & scale as user scrolls toward mastery
      const scale = 1.0 + p * 0.5;
      corePolyhedronRef.current.scale.set(scale, scale, scale);
    }

    // Knowledge Shards assemble magnetically from raw information into structured mastery
    if (knowledgeShardsGroup.current) {
      const assemblyFactor = 1.0 - Math.min(p * 1.4, 1.0); // 1 = raw info fragments, 0 = locked into crystal core
      knowledgeShardsGroup.current.children.forEach((shard, idx) => {
        const offset = shardData[idx].initialOffset;
        shard.position.x = offset.x * assemblyFactor;
        shard.position.y = offset.y * assemblyFactor;
        shard.position.z = offset.z * assemblyFactor;

        shard.rotation.x = time * 0.4 + idx;
        shard.rotation.y = time * 0.3 + idx;
      });
    }
  });

  return (
    <>
      {/* Futuristic 3D Knowledge Matrix Structure */}
      <group ref={learningMatrixGroup} position={[1.5, 0.2, 2.5]}>
        {/* Central Master Crystalline Polyhedron */}
        <mesh ref={corePolyhedronRef}>
          <dodecahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial color="#8B5CF6" metalness={0.92} roughness={0.06} emissive="#8B5CF6" emissiveIntensity={0.25} />
          <mesh>
            <dodecahedronGeometry args={[1.54, 1]} />
            <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.45} />
          </mesh>
        </mesh>

        {/* Aggregating Knowledge Shards (Information → Skill → Mastery) */}
        <group ref={knowledgeShardsGroup}>
          {shardData.map((shard, idx) => (
            <mesh key={idx}>
              <octahedronGeometry args={[0.3, 0]} />
              <meshStandardMaterial color={shard.color} metalness={0.85} roughness={0.15} />
            </mesh>
          ))}
        </group>

        {/* Outer Skill Pathway Ring */}
        <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[3.4, 0.06, 16, 90]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.5} wireframe />
        </mesh>
      </group>

      {/* Information Particle Cloud Aggregation */}
      <ParticleField count={1300} radius={12} color="#0F172A" accentColor="#8B5CF6" scrollProgress={scrollProgress} shape="cloud" />
    </>
  );
}

export default function EduTechCanvas({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <BaseCanvas cameraPos={[0, 0, 8.5]}>
      <EduTechKnowledgeScene scrollProgress={scrollProgress} />
    </BaseCanvas>
  );
}
