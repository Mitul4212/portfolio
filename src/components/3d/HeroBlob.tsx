"use client";

import { useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial, PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

// Custom Shader Material
const BlobMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor1: new THREE.Color("#7B2FFF"),
    uColor2: new THREE.Color("#02D9FF"),
    uColor3: new THREE.Color("#00F6A4"),
    uMouse: new THREE.Vector2(0, 0),
    uScroll: 0,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    varying float vDisplacement;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uScroll;

    // Simplex noise function (simplified)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vUv = uv;
      
      // Mouse influence
      float mouseDist = distance(uv, uMouse * 0.5 + 0.5);
      float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.5;

      // Noise displacement
      float noise = snoise(position * 1.5 + uTime * 0.5);
      vDisplacement = noise;
      
      vec3 newPos = position + normal * (noise * (0.3 + mouseInfluence + uScroll * 0.2));
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `,
  // Fragment Shader
  `
    varying vec2 vUv;
    varying float vDisplacement;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;

    void main() {
      float mixStrength = vDisplacement * 0.5 + 0.5;
      
      vec3 color = mix(uColor1, uColor2, mixStrength);
      color = mix(color, uColor3, vUv.y);
      
      // Rim lighting effect (Reduced intensity)
      float fresnel = pow(1.0 - gl_FragCoord.z, 3.0);
      
      // Reduced overall brightness by 15%
      gl_FragColor = vec4((color + fresnel * 0.15) * 0.85, 1.0);
    }
  `
);

extend({ BlobMaterial });

export default function HeroBlob() {
  const materialRef = useRef<any>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.getElapsedTime();
      materialRef.current.uMouse = new THREE.Vector2(mouse.x, mouse.y);
      // Scroll mapping could be added here if we had global scroll state access
      // materialRef.current.uScroll = scrollY / window.innerHeight;
    }
  });

  return (
    <group>
      <PerformanceMonitor onDecline={() => { /* Reduce quality */ }} />
      <mesh scale={2} position={[2, 0, 0]}>
        <icosahedronGeometry args={[1, 64]} />
        {/* @ts-ignore */}
        <blobMaterial ref={materialRef} transparent />
      </mesh>
    </group>
  );
}
