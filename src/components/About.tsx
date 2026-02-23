"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-[clamp(4rem,10vw,8rem)] relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <User className="text-primary w-5 h-5" />
                            <h2 className="text-[clamp(0.75rem,1.5vw,0.875rem)] font-bold uppercase tracking-[0.2em] text-primary">About Me</h2>
                        </div>
                        <h3 className="text-[clamp(1.75rem,5vw,3.75rem)] font-black mb-8 leading-tight">
                            Turning complex problems into <span className="text-brand-purple">beautiful</span> digital solutions.
                        </h3>
                        <div className="space-y-6 text-[clamp(1rem,2vw,1.125rem)] text-muted-foreground leading-relaxed">
                            <p>
                                Full-Stack Developer with 2+ years of experience building scalable web and mobile applications. Proficient in React, React Native, Node.js, and Nest, with strong expertise in modern UI development, REST APIs, and database management using MySQL and PostgreSQL.
                            </p>
                            <p>
                                Experienced in performance optimization, Redux state management, and cloud services like AWS and Vercel. Skilled in AI-assisted development using ChatGPT, Cursor AI, and Claude.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 mt-12">
                            <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-tight">Location</p>
                                    <p className="font-bold text-base">Chennai, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5">
                                <div className="p-3 bg-brand-purple/10 rounded-xl text-brand-purple">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-tight">Experience</p>
                                    <p className="font-bold text-base">2+ Years</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5 sm:col-span-2 2xl:col-span-1">
                                <div className="p-3 bg-brand-emerald/10 rounded-xl text-brand-emerald">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-tight">Education</p>
                                    <p className="font-bold text-base">BCA Graduate</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative order-1 lg:order-2 px-4 sm:px-12 lg:px-0"
                    >
                        <div className="aspect-square glass rounded-[2.5rem] overflow-hidden relative group shadow-2xl border border-white/10">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-brand-emerald/20 group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                            <div className="p-12 h-full flex items-center justify-center relative z-10">
                                <div className="text-center">
                                    <motion.h4
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        className="text-[clamp(4rem,15vw,9rem)] font-black mb-2 text-gradient"
                                    >
                                        2+
                                    </motion.h4>
                                    <p className="text-muted-foreground font-bold uppercase tracking-[0.3em] text-[clamp(0.7rem,1.5vw,0.875rem)]">Years of Experience</p>
                                    <div className="w-20 h-1.5 bg-primary mx-auto mt-8 rounded-full" />
                                </div>
                            </div>

                            {/* Floating Badges - Absolute positioned but responsive */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-8 right-8 z-20"
                            >
                                <Badge className="px-5 py-2 glass shadow-2xl border-white/20 text-sm font-bold rounded-full">AI Enthusiast</Badge>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute bottom-12 left-8 z-20"
                            >
                                <Badge className="px-5 py-2 glass shadow-2xl border-white/20 text-brand-purple text-sm font-bold rounded-full">Clean Code</Badge>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
