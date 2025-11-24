"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/resume";
import SceneWrapper from "./SceneWrapper";
import {
    Code2, Smartphone, Database, Layout, Server, GitBranch,
    Terminal, Cpu, Globe, Layers, Box, Wifi
} from "lucide-react";

// Map for icons (fallback to generic if specific not found)
const IconMap: Record<string, any> = {
    "Android": Smartphone,
    "Kotlin": Code2,
    "Java": Code2,
    "Jetpack Compose": Layout,
    "XML": Code2,
    "MVVM": Layers,
    "Clean Architecture": Box,
    "Coroutines": Cpu,
    "Dagger Hilt": Box,
    "Retrofit": Globe,
    "OkHttp": Globe,
    "Room": Database,
    "Firebase": Database,
    "SQLite": Database,
    "Git": GitBranch,
    "GitHub": GitBranch,
    "CI/CD": Server,
    "Gradle": Terminal,
    "Android Studio": Terminal,
    "Figma": Layout,
    "REST APIs": Wifi,
};

export default function Skills() {
    return (
        <SceneWrapper id="skills" className="py-20 sm:py-24 md:py-32 bg-bg-midnight relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary-1/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <h2 className="text-primary-2 font-sub font-semibold tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm">
                        Technical Arsenal
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
                        Tools & Technologies
                    </h3>
                </motion.div>

                <div className="grid gap-8 sm:gap-10 md:gap-12">
                    {skills.map((group, groupIdx) => (
                        <div key={group.category}>
                            <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-6 sm:mb-8 border-l-4 border-primary-1 pl-3 sm:pl-4">
                                {group.category}
                            </h4>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
                                {group.items.map((skill, idx) => {
                                    const Icon = IconMap[skill] || Code2;

                                    return (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 + groupIdx * 0.1 }}
                                            whileHover={{ y: -5, scale: 1.05 }}
                                            className="group relative p-4 sm:p-5 md:p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary-1/50 transition-all duration-300 flex flex-col items-center gap-3 sm:gap-4 text-center backdrop-blur-sm"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary-1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                                            <div className="p-2 sm:p-3 rounded-full bg-white/5 text-primary-2 group-hover:text-primary-1 group-hover:bg-white/10 transition-colors">
                                                <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                            </div>

                                            <span className="font-body font-medium text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SceneWrapper>
    );
}
