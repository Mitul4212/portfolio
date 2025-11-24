"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SceneWrapper from "./SceneWrapper";
import { personalInfo } from "@/data/resume";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function Planet() {
    return (
        <Sphere args={[1, 64, 64]} scale={2.5}>
            <MeshDistortMaterial
                color="#7B2FFF"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <SceneWrapper id="contact" className="py-20 sm:py-24 md:py-32 bg-bg-midnight relative overflow-hidden">
            {/* Background Planet - Hidden on mobile for performance */}
            <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none hidden md:block">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Planet />
                </Canvas>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
                    {/* Contact Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8"
                        >
                            Let's <span className="text-primary-2">Connect</span>
                        </motion.h2>

                        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 font-body leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6 sm:space-y-8">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl group">
                                <div className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-primary-1/50 group-hover:bg-primary-1/10 transition-all">
                                    <Mail className="text-primary-1 w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors font-nav text-sm sm:text-base md:text-lg break-all">{personalInfo.email}</span>
                            </a>

                            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl group">
                                <div className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-primary-2/50 group-hover:bg-primary-2/10 transition-all">
                                    <Phone className="text-primary-2 w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors font-nav text-sm sm:text-base md:text-lg">{personalInfo.phone}</span>
                            </a>

                            <div className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl">
                                <div className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10">
                                    <MapPin className="text-accent w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <span className="text-gray-300 font-nav text-sm sm:text-base md:text-lg">{personalInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        onSubmit={handleSubmit}
                        className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-sm"
                    >
                        <div className="space-y-5 sm:space-y-6">
                            <div>
                                <label className="block text-xs sm:text-sm font-nav font-bold mb-2 text-gray-400">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-primary-1 transition-colors font-body"
                                    placeholder="John Doe"
                                    suppressHydrationWarning
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-nav font-bold mb-2 text-gray-400">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-primary-1 transition-colors font-body"
                                    placeholder="john@example.com"
                                    suppressHydrationWarning
                                />
                            </div>
                            <div>
                                <label className="block text-xs sm:text-sm font-nav font-bold mb-2 text-gray-400">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-primary-1 transition-colors font-body"
                                    placeholder="Tell me about your project..."
                                    suppressHydrationWarning
                                />
                            </div>

                            <button type="submit" className="w-full py-3 sm:py-4 bg-gradient-to-r from-primary-1 to-primary-2 rounded-xl font-nav font-bold text-white text-sm sm:text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                Send Message <Send size={16} className="sm:w-4.5 sm:h-4.5" />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </SceneWrapper>
    );
}
