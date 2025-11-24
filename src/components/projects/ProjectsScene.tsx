"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/data/resume";
import PhoneModel from "../3d/PhoneModel";
import { Github, ExternalLink } from "lucide-react";
import { Suspense } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsScene() {
    const container = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
    const [activeProject, setActiveProject] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useGSAP(() => {
        if (isMobile) {
            // Kill any existing ScrollTriggers for this component to prevent interference
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === container.current) t.kill();
            });
            // Explicitly reset styles that GSAP might have set
            if (horizontalRef.current) {
                horizontalRef.current.style.transform = 'none';
                horizontalRef.current.style.width = '100%';
            }
            return;
        }

        const horizontal = horizontalRef.current;
        if (!horizontal || !container.current) return;

        const totalWidth = horizontal.scrollWidth;
        const viewportWidth = window.innerWidth;

        gsap.to(horizontal, {
            x: -(totalWidth - viewportWidth),
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const index = Math.round(progress * (projects.length - 1));
                    setActiveProject(index);
                }
            }
        });

    }, { scope: container, dependencies: [isMobile] });

    return (
        <section
            ref={container}
            id="projects"
            className={`relative ${isMobile ? 'py-12 sm:py-16 bg-bg-midnight' : 'h-[400vh]'}`}
        >
            {isMobile && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
                    <h2 className="text-primary-2 font-sub font-semibold tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm">
                        Featured Work
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
                        Projects
                    </h3>
                </div>
            )}
            <div className={`${isMobile ? '' : 'sticky top-0 h-screen overflow-hidden'}`}>
                <div
                    ref={horizontalRef}
                    id="projects-horizontal"
                    className={`flex ${isMobile ? 'flex-col gap-12 w-full !transform-none' : 'h-full w-full'}`}
                    style={{ width: isMobile ? '100%' : `${projects.length * 100}vw` }}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`project-item ${isMobile ? 'w-full h-auto py-6' : 'w-screen h-full'} flex items-center justify-center relative px-4 sm:px-6 md:px-12 lg:px-20 ${!isMobile ? 'py-12 md:py-0' : ''} flex-shrink-0`}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${idx % 2 === 0 ? 'from-primary-1 to-primary-2' : 'from-accent to-primary-1'}`} />

                            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center w-full max-w-7xl mx-auto z-10">
                                {/* 3D Phone Showcase */}
                                <div className="h-[300px] sm:h-[350px] md:h-[500px] lg:h-[550px] w-full flex items-center justify-center order-2 md:order-1 relative">
                                    {idx === 0 ? (
                                        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
                                            <ambientLight intensity={0.5} />
                                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                                            <Environment preset="city" />
                                            <Suspense fallback={null}>
                                                <PhoneModel screenTexture="/screens/nocturnevpn.jpg" />
                                            </Suspense>
                                            <OrbitControls enableZoom={false} enablePan={false} />
                                        </Canvas>
                                    ) : (
                                        <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
                                            {/* Display project image for other projects */}
                                            <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[400px] h-full max-h-[280px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[400px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary-1/20 to-primary-2/20" />
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-contain p-1.5 sm:p-2 relative z-20"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Text Content */}
                                <div className="order-1 md:order-2">
                                    <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4 md:mb-6 backdrop-blur-sm">
                                        <span className="text-primary-2 font-code text-xs sm:text-sm">0{idx + 1} / 0{projects.length}</span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed font-body">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-6 sm:mb-8 md:mb-10">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2.5 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs sm:text-sm text-gray-300 font-code">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
                                        <a href={project.links.github} target="_blank" className="flex items-center gap-1.5 sm:gap-2 text-white hover:text-primary-1 transition-colors font-sub font-medium group text-sm sm:text-base">
                                            <Github size={18} className="sm:w-5 sm:h-5" />
                                            <span className="group-hover:translate-x-1 transition-transform">Source Code</span>
                                        </a>
                                        {project.links.demo && (
                                            <a href={project.links.demo} target="_blank" className="flex items-center gap-1.5 sm:gap-2 text-white hover:text-primary-2 transition-colors font-sub font-medium group text-sm sm:text-base">
                                                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                                                <span className="group-hover:translate-x-1 transition-transform">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
