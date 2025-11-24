"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Octahedron } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingIcons() {
    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={1} position={[-3, 2, 0]}>
                <Icosahedron args={[0.5, 0]}>
                    <meshStandardMaterial color="#02D9FF" wireframe />
                </Icosahedron>
            </Float>

            <Float speed={3} rotationIntensity={1.5} floatIntensity={1} position={[3, -1, 0]}>
                <Torus args={[0.4, 0.1, 16, 32]}>
                    <meshStandardMaterial color="#FF007A" metalness={0.8} roughness={0.2} />
                </Torus>
            </Float>

            <Float speed={2.5} rotationIntensity={1} floatIntensity={0.8} position={[0, 3, -2]}>
                <Octahedron args={[0.6]}>
                    <meshStandardMaterial color="#7B2FFF" transparent opacity={0.6} />
                </Octahedron>
            </Float>
        </group>
    );
}
