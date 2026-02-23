"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Globe, Smartphone, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
    {
        title: "HR & Payroll Management System (HRMS)",
        description: "Enterprise-grade HRMS built with React and Node.js Microservices architecture. Features include automated payroll, attendance tracking across multiple countries, and advanced reporting.",
        image: "/hrms.png",
        tech: [
            { name: "React", icon: <Globe size={12} /> },
            { name: "Node", icon: <Server size={12} /> },
            { name: "Microservices", icon: <Code2 size={12} /> }
        ],
        live: "#",
        github: "https://github.com/Aravindakumar2002",
    },
    {
        title: "EduTech Application (Web & Mobile)",
        description: "Comprehensive EduTech platform featuring a React-based web dashboard for instructors and a React Native mobile application for students. Integrated video streaming and progress tracking.",
        image: "/edutech.png",
        tech: [
            { name: "React", icon: <Globe size={12} /> },
            { name: "React Native", icon: <Smartphone size={12} /> },
            { name: "Node", icon: <Server size={12} /> }
        ],
        live: "#",
        github: "https://github.com/Aravindakumar2002",
    },
    {
        title: "Deygaa – AI Skin Analysis App",
        description: "Mobile app that scans skin and generates AI-powered skincare reports using OpenAI API and a secure NestJS backend.",
        image: "/project1.png",
        tech: [
            { name: "React Native", icon: <Smartphone size={12} /> },
            { name: "Nest", icon: <Server size={12} /> },
            { name: "OpenAI", icon: <Code2 size={12} /> }
        ],
        live: "#",
        github: "https://github.com/Aravindakumar2002",
    },
    {
        title: "Employee Management System",
        description: "Full-featured system with attendance tracking, role-based access control, and performance analytics with a secure backend.",
        image: "/project2.png",
        tech: [
            { name: "React", icon: <Globe size={12} /> },
            { name: "Node", icon: <Server size={12} /> },
            { name: "MySQL", icon: <Code2 size={12} /> }
        ],
        live: "#",
        github: "https://github.com/Aravindakumar2002",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-0 w-full h-full bg-brand-purple/5 blur-[150px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-24 gap-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-primary font-mono mb-2 text-sm uppercase tracking-[0.3em] font-bold">My Work</h2>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">Featured Projects</h3>
                    </div>
                    <p className="text-muted-foreground text-center lg:text-right max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed">
                        A selection of my recent work, ranging from AI applications to enterprise management systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group glass rounded-[2.5rem] overflow-hidden flex flex-col border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                                    <Button size="icon" variant="secondary" className="rounded-full w-14 h-14 bg-white text-black hover:bg-primary hover:text-white transition-all scale-75 group-hover:scale-100 duration-500">
                                        <Github className="w-6 h-6" />
                                    </Button>
                                    <Button size="icon" className="rounded-full w-14 h-14 bg-primary text-white transition-all scale-75 group-hover:scale-100 duration-500 delay-75">
                                        <ExternalLink className="w-6 h-6" />
                                    </Button>
                                </div>
                            </div>

                            <div className="p-8 md:p-10 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t: any) => (
                                        <Badge key={t.name} variant="secondary" className="bg-white/5 border-white/10 text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold py-1.5 px-4 rounded-full text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                            {t.icon}
                                            {t.name}
                                        </Badge>
                                    ))}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {project.title}
                                </h4>
                                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <Button variant="link" className="p-0 h-auto text-primary flex gap-3 items-center text-base md:text-lg font-black hover:gap-5 transition-all">
                                        Explore Details <ExternalLink size={20} />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
