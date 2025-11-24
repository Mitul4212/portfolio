"use client";

import Section from "./Section";
import { interests } from "@/data/resume";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Interests() {
    return (
        <Section id="interests">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto px-4 sm:px-6"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3">
                    <Heart className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" /> Interests
                </h2>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {interests.map((interest, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default text-sm sm:text-base"
                        >
                            {interest}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
