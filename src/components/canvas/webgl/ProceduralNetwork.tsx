"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ProceduralNetworkProps {
  nodeCount?: number;
  maxDistance?: number;
  color?: string;
  pulseColor?: string;
  scrollProgress?: number;
}

export default function ProceduralNetwork({
  nodeCount = 45,
  maxDistance = 3.2,
  color = "#1E293B",
  pulseColor = "#00F0FF",
  scrollProgress = 0,
}: ProceduralNetworkProps) {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const [effectiveNodes, setEffectiveNodes] = useState(nodeCount);

  useEffect(() => {
    const updateNodes = () => {
      if (window.innerWidth < 768) {
        setEffectiveNodes(Math.floor(nodeCount * 0.5));
      } else {
        setEffectiveNodes(nodeCount);
      }
    };
    updateNodes();
    window.addEventListener("resize", updateNodes, { passive: true });
    return () => window.removeEventListener("resize", updateNodes);
  }, [nodeCount]);

  // Generate node positions & edge connections into single BufferAttributes (1 draw call each)
  const { nodePositionsFloat, nodeColorsFloat, linePositions, lineColors } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const nodeCoords: number[] = [];
    const nodeCols: number[] = [];
    const pulseCol = new THREE.Color(pulseColor);
    const dimCol = new THREE.Color("#94A3B8");
    const baseCol = new THREE.Color(color);

    for (let i = 0; i < effectiveNodes; i++) {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10
      );
      nodes.push(v);
      nodeCoords.push(v.x, v.y, v.z);

      const isPulse = i % 5 === 0;
      const c = isPulse ? pulseCol : dimCol;
      nodeCols.push(c.r, c.g, c.b);
    }

    // Build connections
    const lineCoords: number[] = [];
    const lineCols: number[] = [];

    for (let i = 0; i < effectiveNodes; i++) {
      for (let j = i + 1; j < effectiveNodes; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < maxDistance) {
          lineCoords.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lineCoords.push(nodes[j].x, nodes[j].y, nodes[j].z);

          const isPulse = Math.random() > 0.82;
          const c = isPulse ? pulseCol : baseCol;
          lineCols.push(c.r, c.g, c.b);
          lineCols.push(c.r, c.g, c.b);
        }
      }
    }

    return {
      nodePositionsFloat: new Float32Array(nodeCoords),
      nodeColorsFloat: new Float32Array(nodeCols),
      linePositions: new Float32Array(lineCoords),
      lineColors: new Float32Array(lineCols),
    };
  }, [effectiveNodes, maxDistance, color, pulseColor]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.08 + scrollProgress * Math.PI;
    groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Network Nodes (Single Points Draw Call) */}
      <points>
        <bufferGeometry key={effectiveNodes}>
          <bufferAttribute attach="attributes-position" args={[nodePositionsFloat, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeColorsFloat, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.08} vertexColors transparent opacity={0.8} blending={THREE.AdditiveBlending} />
      </points>

      {/* Network Connecting Lines (Single LineSegments Draw Call) */}
      <lineSegments ref={linesRef}>
        <bufferGeometry key={`lines-${effectiveNodes}`}>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.35} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}
