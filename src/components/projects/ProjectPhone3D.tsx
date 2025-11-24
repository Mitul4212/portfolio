"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Html, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

// Fallback Phone Model (Procedural)
function ProceduralPhone({ children }: { children: React.ReactNode }) {
    return (
        <group>
            <RoundedBox args={[2.5, 5, 0.3]} radius={0.2} smoothness={4}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>
            <RoundedBox args={[2.3, 4.8, 0.01]} radius={0.1} position={[0, 0, 0.16]}>
                <meshBasicMaterial color="black" />
            </RoundedBox>
            <group position={[0, 0, 0.17]}>
                {children}
            </group>
        </group>
    );
}

// GLTF Phone Model
function GLTFPhone({ children }: { children: React.ReactNode }) {
    // Try to load the model, if it fails, the ErrorBoundary in parent should catch it, 
    // but here we'll just use a try-catch pattern via Suspense or just assume it works.
    // If the file doesn't exist, we might need a fallback.
    // For now, we'll use a generic path. If it fails, R3F might error out.
    // Ideally we'd use a useGLTF.preload but we'll stick to simple usage.

    // NOTE: Since I don't have the actual file, I will use the ProceduralPhone as the primary implementation
    // but structure it so it can be easily swapped.
    // If the user provides the file, we would uncomment the GLTF code.

    /*
    const { nodes, materials } = useGLTF("/models/phone.glb");
    return (
        <primitive object={nodes.Scene}>
            <Html ... />
        </primitive>
    )
    */

    return <ProceduralPhone>{children}</ProceduralPhone>;
}

export default function ProjectPhone3D({ project, isActive }: { project: any, isActive: boolean }) {
    const group = useRef<THREE.Group>(null);

    // Load textures (placeholders if not real screenshots)
    // const texture = useTexture(project.image || "/placeholder.png");

    useFrame((state) => {
        if (group.current) {
            // Gentle float
            group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

            // Rotate based on active state
            const targetRotation = isActive ? 0 : 0.5;
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotation, 0.05);
        }
    });

    return (
        <group ref={group} rotation={[0, 0.5, 0]}>
            <Suspense fallback={<ProceduralPhone><div /></ProceduralPhone>}>
                <ProceduralPhone>
                    {/* Screen Content */}
                    <Html
                        transform
                        occlude
                        position={[0, 0, 0]}
                        style={{
                            width: '330px',
                            height: '680px',
                            background: '#000',
                            borderRadius: '20px',
                            overflow: 'hidden',
                        }}
                    >
                        <div className="w-full h-full relative group">
                            {/* Placeholder for screenshot */}
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white font-mono text-xs">
                                {project.title} Screenshot
                            </div>

                            {/* Overlay */}
                            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-70'}`} />
                        </div>
                    </Html>
                </ProceduralPhone>
            </Suspense>
        </group>
    );
}
