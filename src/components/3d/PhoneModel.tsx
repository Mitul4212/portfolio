"use client";

import { useGLTF, useTexture, Center } from "@react-three/drei";
import { useRef } from "react";
import { Group, DoubleSide } from "three";
import { useFrame, useThree } from "@react-three/fiber";

// Preload the model
useGLTF.preload("/models/samsung_s24_ultra.glb");

export default function PhoneModel({ screenTexture }: { screenTexture: string }) {
    const group = useRef<Group>(null);
    const { scene } = useGLTF("/models/samsung_s24_ultra.glb");

    // Load texture with high quality settings
    const { gl } = useThree();
    const screen = useTexture(screenTexture);
    screen.flipY = false;
    // Improve texture quality safely
    screen.anisotropy = Math.min(16, gl.capabilities.getMaxAnisotropy());
    screen.generateMipmaps = true;

    useFrame((state) => {
        if (group.current) {
            // Gentle float
            group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            // Tilt - More upright (rotated 180 degrees to face front)
            group.current.rotation.y = Math.PI + Math.PI / 8 + Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
        }
    });

    return (
        <group ref={group} dispose={null} scale={1}>
            <Center>
                <primitive object={scene} />
            </Center>
            {/* Custom Screen Plane - Positioned to overlay the phone screen */}
            {/* Placed outside Center to align relative to the centered phone */}
            {/* Adjusted dimensions and position for better alignment and visibility */}
            <mesh position={[0, 0.01, -0.17]} rotation={[0, 0, Math.PI]}>
                <planeGeometry args={[2.0, 4.22]} />
                <meshBasicMaterial
                    map={screen}
                    toneMapped={false}
                    side={DoubleSide}
                />
            </mesh>
        </group>
    );
}
