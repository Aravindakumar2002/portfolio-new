"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Database, Cloud, Terminal,
    Layers, Cpu, BrainCircuit
} from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Layers className="text-blue-400 w-7 h-7" />,
        skills: ["React", "Next", "React Native", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: <Terminal className="text-emerald-400 w-7 h-7" />,
        skills: ["Node", "Nest", "Express", "REST API", "JWT Authentication"],
    },
    {
        title: "Database",
        icon: <Database className="text-orange-400 w-7 h-7" />,
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
        title: "Cloud & Services",
        icon: <Cloud className="text-cyan-400 w-7 h-7" />,
        skills: ["AWS", "Firebase", "Vercel", "Neon"],
    },
    {
        title: "Tools",
        icon: <Cpu className="text-purple-400 w-7 h-7" />,
        skills: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "Android Studio"],
    },
    {
        title: "AI Tools",
        icon: <BrainCircuit className="text-pink-400 w-7 h-7" />,
        skills: ["ChatGPT", "Cursor AI", "Claude AI", "Antigravity AI"],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-[clamp(4rem,10vw,8rem)] bg-black/30 relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-mono mb-2 text-sm uppercase tracking-[0.3em] font-bold"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
                    >
                        Technical Skillset
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 lg:gap-10">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-8 md:p-10 rounded-3xl hover:border-primary/50 transition-all group relative overflow-hidden border border-white/5"
                        >
                            {/* Subtle hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-center gap-5 mb-8 relative z-10">
                                <div className="p-4 glass rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-xl border border-white/10">
                                    {category.icon}
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold">{category.title}</h4>
                            </div>

                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm md:text-base bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:text-white hover:border-primary hover:scale-105 transition-all cursor-default font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
