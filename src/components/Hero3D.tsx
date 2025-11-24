"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function Hero3D() {
    const meshRef = useRef<THREE.Mesh>(null);
    const mouse = useMousePosition();

    useFrame((state) => {
        if (!meshRef.current) return;

        // Complex rotation
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;

        // Mouse interaction
        const targetX = mouse.y * 0.8;
        const targetY = mouse.x * 0.8;

        meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1, 128, 128]} ref={meshRef} scale={2.4}>
                <MeshDistortMaterial
                    color="#7B2FFF"
                    attach="material"
                    distort={0.6}
                    speed={3}
                    roughness={0.1}
                    metalness={0.9}
                    bumpScale={0.01}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </Sphere>

            {/* Secondary Glow Sphere */}
            <Sphere args={[0.8, 32, 32]} position={[1.5, -1, -1]}>
                <meshBasicMaterial color="#02D9FF" transparent opacity={0.1} />
            </Sphere>
        </Float>
    );
}
