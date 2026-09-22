"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  radius?: number;
  color?: string;
  accentColor?: string;
  size?: number;
  scrollProgress?: number;
  mouseReactivity?: boolean;
  shape?: "sphere" | "cylinder" | "cloud";
}

export default function ParticleField({
  count = 1200,
  radius = 12,
  color = "#334155",
  accentColor = "#00F0FF",
  size = 0.04,
  scrollProgress = 0,
  mouseReactivity = true,
  shape = "sphere",
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const [effectiveCount, setEffectiveCount] = useState(count);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) {
        setEffectiveCount(Math.floor(count * 0.5));
      } else {
        setEffectiveCount(count);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount, { passive: true });
    return () => window.removeEventListener("resize", updateCount);
  }, [count]);

  const { positions, colors, initialPositions } = useMemo(() => {
    const pos = new Float32Array(effectiveCount * 3);
    const initPos = new Float32Array(effectiveCount * 3);
    const col = new Float32Array(effectiveCount * 3);
    const baseCol = new THREE.Color(color);
    const accCol = new THREE.Color(accentColor);

    for (let i = 0; i < effectiveCount; i++) {
      let x = 0, y = 0, z = 0;

      if (shape === "sphere") {
        const r = (Math.random() * 0.8 + 0.2) * radius;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
      } else if (shape === "cylinder") {
        const r = (Math.random() * 0.6 + 0.4) * radius;
        const theta = Math.random() * Math.PI * 2;
        x = r * Math.cos(theta);
        y = (Math.random() - 0.5) * radius * 2;
        z = r * Math.sin(theta);
      } else {
        // Cloud
        x = (Math.random() - 0.5) * radius * 2;
        y = (Math.random() - 0.5) * radius * 1.5;
        z = (Math.random() - 0.5) * radius * 2;
      }

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      initPos[i * 3] = x;
      initPos[i * 3 + 1] = y;
      initPos[i * 3 + 2] = z;

      const c = Math.random() > 0.75 ? accCol : baseCol;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return { positions: pos, colors: col, initialPositions: initPos };
  }, [effectiveCount, radius, color, accentColor, shape]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Rotation based on time and scroll
    pointsRef.current.rotation.y = time * 0.05 + scrollProgress * Math.PI * 0.5;
    pointsRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;

    // Gentle particle wave animation
    const geom = pointsRef.current.geometry;
    const posAttr = geom.attributes.position;
    if (!posAttr) return;

    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < effectiveCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // Base sine offset
      let oy = initialPositions[iy] + Math.sin(time * 0.8 + initialPositions[ix] * 0.5) * 0.15;
      let ox = initialPositions[ix] + Math.cos(time * 0.5 + initialPositions[iz] * 0.5) * 0.1;

      // Mouse influence
      if (mouseReactivity) {
        const dx = pointer.x * 6 - ox;
        const dy = pointer.y * 4 - oy;
        const distSq = dx * dx + dy * dy;
        if (distSq < 16) {
          const factor = (1 - distSq / 16) * 0.3;
          ox -= dx * factor;
          oy -= dy * factor;
        }
      }

      arr[ix] = THREE.MathUtils.lerp(arr[ix], ox, 0.05);
      arr[iy] = THREE.MathUtils.lerp(arr[iy], oy, 0.05);
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry key={effectiveCount}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
