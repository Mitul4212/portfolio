"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import SceneWrapper from "./SceneWrapper";
import HeroBlob from "./3d/HeroBlob";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Hero() {
    return (
        <SceneWrapper id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-midnight">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Suspense fallback={null}>
                        <HeroBlob />
                        <ambientLight intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-[20] pointer-events-none max-w-7xl mx-auto px-4 sm:px-6 w-full pt-16 sm:pt-20">
                <div className="max-w-4xl pointer-events-auto">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary-2 font-sub font-semibold tracking-wider mb-3 sm:mb-4 uppercase text-xs sm:text-sm md:text-base"
                    >
                        Android Developer
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight relative z-[20] mb-4 sm:mb-6"
                    >
                        <span className="text-white">Mitul</span>{" "}
                        <span className="text-white opacity-100 !mix-blend-normal text-shadow-strong">
                            Chovatiya
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative mb-8 sm:mb-10 max-w-2xl"
                    >
                        {/* Scrim for readability */}
                        <div className="absolute inset-0 bg-bg-midnight/40 blur-xl -z-10 rounded-full" />
                        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-body font-medium leading-relaxed">
                            Crafting high-performance Android experiences with modern architecture, secure networking, and polished UI engineering.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5"
                    >
                        <a
                            href="#projects"
                            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full overflow-hidden transition-all hover:scale-105 text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-1 to-primary-2 opacity-0 group-hover:opacity-20 transition-opacity" />
                            <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-primary-1/50 transition-colors" />
                            <span className="relative flex items-center justify-center gap-2 font-sub font-bold text-white text-sm sm:text-base">
                                View My Work <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="group px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all hover:border-white/50 text-center"
                        >
                            <span className="flex items-center justify-center gap-2 font-sub font-bold text-white text-sm sm:text-base">
                                Contact Me <Mail size={18} className="sm:w-5 sm:h-5" />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hidden sm:flex"
            >
                <span className="text-xs font-code tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary-1 to-transparent" />
            </motion.div>
        </SceneWrapper>
    );
}
