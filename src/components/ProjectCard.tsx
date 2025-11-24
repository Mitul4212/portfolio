"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
    project: {
        title: string;
        subtitle: string;
        description: string;
        tech: string[];
        links: {
            github: string;
            demo?: string;
        };
        image: string;
    };
}

export default function ProjectCard({ project }: ProjectProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="relative group h-full"
        >
            <div
                className="h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300 shadow-xl"
                style={{ transform: "translateZ(0px)" }}
            >
                <div className="relative h-48 w-full overflow-hidden bg-gray-800">
                    {/* Placeholder for image if not available */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        <span className="text-4xl font-bold opacity-20">{project.title[0]}</span>
                    </div>
                    {/* Actual image would go here */}
                    {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                            <p className="text-sm text-blue-400">{project.subtitle}</p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            {project.links.demo && (
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
