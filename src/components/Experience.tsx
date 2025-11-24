"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/resume";
import SceneWrapper from "./SceneWrapper";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <SceneWrapper id="experience" className="py-20 sm:py-24 md:py-32 bg-bg-midnight relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <h2 className="text-primary-2 font-sub font-semibold tracking-widest uppercase mb-3 sm:mb-4 text-xs sm:text-sm">
                        Journey So Far
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
                        Experience & Education
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 sm:gap-14 md:gap-16">
                    {/* Experience Column */}
                    <div>
                        <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-8 sm:mb-10 flex items-center gap-3">
                            <span className="w-2 h-6 sm:h-8 bg-primary-1 rounded-full" />
                            Work Experience
                        </h4>

                        <div className="space-y-8 sm:space-y-10 md:space-y-12 relative border-l border-white/10 ml-2 sm:ml-3 pl-6 sm:pl-8 md:pl-12">
                            {experience.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="relative"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[29px] sm:-left-[41px] md:-left-[57px] top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-bg-midnight border-2 border-primary-1 shadow-[0_0_10px_rgba(123,47,255,0.5)]" />

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 hover:border-primary-1/30 transition-colors">
                                        <h5 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.title}</h5>
                                        <div className="text-primary-2 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{exp.company}</div>

                                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 font-code">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                                                {exp.location}
                                            </div>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-gray-300 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                                                    <span className="text-primary-1 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-8 sm:mb-10 flex items-center gap-3">
                            <span className="w-2 h-6 sm:h-8 bg-primary-2 rounded-full" />
                            Education
                        </h4>

                        <div className="space-y-8 sm:space-y-10 md:space-y-12 relative border-l border-white/10 ml-2 sm:ml-3 pl-6 sm:pl-8 md:pl-12">
                            {education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="relative"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[29px] sm:-left-[41px] md:-left-[57px] top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-bg-midnight border-2 border-primary-2 shadow-[0_0_10px_rgba(2,217,255,0.5)]" />

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 hover:border-primary-2/30 transition-colors">
                                        <h5 className="text-lg sm:text-xl font-bold text-white mb-1">{edu.degree}</h5>
                                        <div className="text-primary-2 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{edu.institution}</div>

                                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 font-code">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                                                {edu.period}
                                            </div>
                                            <div className="font-bold text-white">
                                                {edu.grade}
                                            </div>
                                        </div>

                                        {edu.achievements && (
                                            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
                                                <div className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">Achievements</div>
                                                <ul className="space-y-2">
                                                    {edu.achievements.map((item, i) => (
                                                        <li key={i} className="text-gray-400 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                                                            <span className="text-primary-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SceneWrapper>
    );
}
