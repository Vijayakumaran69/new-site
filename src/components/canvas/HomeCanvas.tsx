"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import BaseCanvas from "./webgl/BaseCanvas";
import ParticleField from "./webgl/ParticleField";
import ProceduralNetwork from "./webgl/ProceduralNetwork";

function HomeScene({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const logoEmblemRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const techCubeRef = useRef<THREE.Mesh>(null);

  // Non-suspending, non-blocking texture loader so the scene renders immediately on frame 1
  const logoTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const loader = new THREE.TextureLoader();
    const tex = loader.load("/xenclavis-logo.png");
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const p = scrollProgress;
    const pointer = state.pointer;

    if (groupRef.current) {
      // Smooth scroll-driven camera translation & tilt
      const targetX = THREE.MathUtils.lerp(1.8, -1.5, p) + pointer.x * 0.4;
      const targetY = THREE.MathUtils.lerp(0.2, -1.8, p) + pointer.y * 0.3;
      const targetZ = THREE.MathUtils.lerp(3.2, 0.5, p);

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.08);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.08);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.08);

      groupRef.current.rotation.y = time * 0.12 + p * Math.PI * 1.2;
      groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.15 + pointer.y * 0.2;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.4;
      coreRef.current.rotation.z = time * 0.2;
    }
    if (logoEmblemRef.current) {
      logoEmblemRef.current.rotation.y = time * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -time * 0.15;
      outerRingRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = time * 0.25;
    }
    if (techCubeRef.current) {
      techCubeRef.current.rotation.x = time * 0.3;
      techCubeRef.current.rotation.y = -time * 0.2;
    }
  });

  return (
    <>
      {/* Ecosystem Tri-Core Centerpiece */}
      <group ref={groupRef} position={[1.8, 0.2, 3.2]} scale={[1.2, 1.2, 1.2]}>
        {/* Official Brand Emblem 3D Disk */}
        {logoTexture && (
          <mesh ref={logoEmblemRef} position={[0, 0, 0]}>
            <cylinderGeometry args={[1.1, 1.1, 0.08, 64]} />
            <meshBasicMaterial map={logoTexture} transparent side={THREE.DoubleSide} />
          </mesh>
        )}

        {/* Cybersecurity Shield Ring */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[3.2, 0.08, 32, 120]} />
          <meshStandardMaterial color="#00F0FF" metalness={0.9} roughness={0.1} emissive="#00F0FF" emissiveIntensity={0.2} />
        </mesh>

        {/* Technology Structural Matrix Ring */}
        <mesh ref={innerRingRef} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.4, 0.1, 32, 120]} />
          <meshStandardMaterial color="#3B82F6" metalness={0.95} roughness={0.08} />
        </mesh>

        {/* EduTech Skill Matrix Box Frame */}
        <mesh ref={techCubeRef}>
          <boxGeometry args={[2.2, 2.2, 2.2]} />
          <meshBasicMaterial color="#38BDF8" wireframe transparent opacity={0.25} />
        </mesh>

        {/* Core Glowing Energy Wireframe Octahedron */}
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.5, 2]} />
          <meshStandardMaterial color="#0F172A" metalness={0.9} roughness={0.1} />
          <mesh>
            <octahedronGeometry args={[1.54, 2]} />
            <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.4} />
          </mesh>
        </mesh>
      </group>

      {/* Dynamic 3D Particle Cloud */}
      <ParticleField count={1400} radius={14} color="#1E293B" accentColor="#00F0FF" scrollProgress={scrollProgress} />

      {/* Procedural Ecosystem Network Lattices */}
      <ProceduralNetwork nodeCount={50} maxDistance={3.5} color="#0F172A" pulseColor="#00F0FF" scrollProgress={scrollProgress} />
    </>
  );
}

export default function HomeCanvas({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <BaseCanvas cameraPos={[0, 0, 8.5]}>
      <HomeScene scrollProgress={scrollProgress} />
    </BaseCanvas>
  );
}
