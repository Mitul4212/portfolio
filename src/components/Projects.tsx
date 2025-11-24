"use client";

import Section from "./Section";
import { projects } from "@/data/resume";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured <span className="text-blue-500">Projects</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on. Each one was a unique challenge that helped me grow as a developer.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="h-full"
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
