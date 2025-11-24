"use client";

import { personalInfo } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-bg-midnight border-t border-white/10 py-8 sm:py-10 md:py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">

                <div className="text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                        {personalInfo.name}
                    </h3>
                    <p className="text-gray-400 font-body text-xs sm:text-sm">
                        Building digital experiences that matter.
                    </p>
                </div>

                <div className="flex gap-4 sm:gap-6">
                    <a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 sm:p-3 rounded-full bg-white/5 hover:bg-primary-1/20 hover:text-primary-1 transition-all border border-white/10 hover:border-primary-1/50"
                        aria-label="GitHub"
                    >
                        <Github size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 sm:p-3 rounded-full bg-white/5 hover:bg-primary-2/20 hover:text-primary-2 transition-all border border-white/10 hover:border-primary-2/50"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} className="sm:w-5 sm:h-5" />
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="p-2.5 sm:p-3 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-all border border-white/10 hover:border-accent/50"
                        aria-label="Email"
                    >
                        <Mail size={18} className="sm:w-5 sm:h-5" />
                    </a>
                </div>

                <div className="text-gray-500 text-xs sm:text-sm font-code">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[150px] sm:h-[200px] bg-primary-1/10 blur-[100px] pointer-events-none" />
        </footer>
    );
}
