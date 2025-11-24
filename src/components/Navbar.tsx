"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/resume";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg-midnight/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-display font-bold text-white">
                    {personalInfo.name.split(" ")[0]}<span className="text-primary-1">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-nav font-medium text-gray-300 hover:text-primary-2 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-nav font-semibold transition-all"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white hover:text-primary-1 transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg-midnight border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-nav font-medium text-gray-300 hover:text-primary-1"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
