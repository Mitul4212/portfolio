"use client";

import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";

export default function About() {
    return (
        <SceneWrapper id="about" className="relative py-16 sm:py-20 md:py-32">
            {/* Aurora Background REMOVED for transparency */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <section className="relative p-4 sm:p-6 md:p-10">
                    <div className="p-4 sm:p-6 md:p-8 rounded-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-primary-2 font-sub font-semibold tracking-widest uppercase mb-4 sm:mb-6 text-xs sm:text-sm">
                                About Me
                            </h2>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 sm:mb-10 md:mb-12 leading-tight">
                                Engineering discipline meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-accent">expressive design</span>.
                            </h3>

                            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-gray-300 font-body leading-relaxed">
                                <p>
                                    I'm Mitul Chovatiya — an Android developer who blends engineering discipline with expressive UI design.
                                    I build high-performance apps using modern architecture, secure networking, and polished interfaces
                                    that feel intuitive and delightful.
                                </p>
                                <p>
                                    I enjoy creating tools, workflows, and interactive experiences that push the boundaries of mobile craftsmanship.
                                    Whether it's optimizing background services or crafting smooth animations, I obsess over the details that make an app feel premium.
                                </p>
                            </div>

                            <div className="mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-white/10 grid grid-cols-2 sm:flex sm:flex-wrap gap-8 sm:gap-12">
                                <div>
                                    <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">1+</div>
                                    <div className="text-xs sm:text-sm text-gray-400 font-sub uppercase tracking-wider">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">2+</div>
                                    <div className="text-xs sm:text-sm text-gray-400 font-sub uppercase tracking-wider">Projects Shipped</div>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">100%</div>
                                    <div className="text-xs sm:text-sm text-gray-400 font-sub uppercase tracking-wider">Commitment</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </SceneWrapper>
    );
}
