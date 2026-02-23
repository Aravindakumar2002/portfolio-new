"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Software Developer",
        company: "SRS Infoway",
        duration: "May 2025 – Nov 2025",
        points: [
            "Developed HR & Payroll system used in 44 countries",
            "Built reporting features for payroll and employee tracking",
            "Optimized backend performance and database queries",
            "Collaborated with HR and business teams",
        ],
    },
    {
        role: "Junior Full Stack Developer",
        company: "Finstein Advizory Service LLP",
        duration: "Mar 2023 – Feb 2025",
        points: [
            "Built scalable EduTech apps using React and React Native",
            "Developed APIs using Nest and MySQL",
            "Integrated AWS S3 for secure media storage",
            "Improved UI performance and UX",
            "Used Redux for state management",
            "Wrote unit tests using Jest",
        ],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-16 md:mb-24">
                    <div className="p-4 bg-primary/20 rounded-[1.5rem] text-primary shadow-2xl shadow-primary/10 border border-primary/20">
                        <Briefcase size={32} />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">Work History</h2>
                        <p className="text-lg text-muted-foreground font-medium">My professional journey so far</p>
                    </div>
                </div>

                <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-8 md:ml-12 pl-8 sm:pl-16 space-y-12 md:space-y-20">
                    {/* Decorative vertical line glow */}
                    <div className="absolute top-0 left-[-2px] bottom-0 w-[2px] bg-gradient-to-b from-primary via-brand-purple to-transparent opacity-50" />

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] sm:left-[-73px] top-6 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full border-[6px] border-background shadow-xl shadow-primary/20 z-10 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                            </div>

                            <div className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden group border border-white/5 hover:border-primary/30 transition-all shadow-2xl">
                                {/* Large background text icon */}
                                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
                                    <Briefcase size={120} />
                                </div>

                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 gap-6">
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-2 leading-tight">{exp.role}</h3>
                                        <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm md:text-base font-bold text-muted-foreground bg-white/5 border border-white/10 px-6 py-3 rounded-full self-start">
                                        <Calendar size={18} className="text-primary" />
                                        {exp.duration}
                                    </div>
                                </div>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    {exp.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex gap-4 text-muted-foreground text-base md:text-lg leading-relaxed group/item cursor-default">
                                            <div className="min-w-[10px] h-2.5 bg-primary/40 rounded-full mt-2.5 group-hover/item:bg-primary transition-colors" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
