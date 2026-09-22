"use client";

import React, { ReactNode, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

interface BaseCanvasProps {
  children: ReactNode;
  cameraPos?: [number, number, number];
  fov?: number;
  fogColor?: string;
  fogNear?: number;
  fogFar?: number;
}

export default function BaseCanvas({
  children,
  cameraPos = [0, 0, 8],
  fov = 50,
  fogColor = "#040507",
  fogNear = 4,
  fogFar = 28,
}: BaseCanvasProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#040507]" />;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: cameraPos, fov }}
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(fogColor, 1);
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 15, 10]} intensity={1.8} color="#FFFFFF" />
        <directionalLight position={[-10, -10, -10]} intensity={0.8} color="#00F0FF" />
        <fog attach="fog" args={[fogColor, fogNear, fogFar]} />
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
