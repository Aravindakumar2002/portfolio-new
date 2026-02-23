"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden">
            {/* Background Animated Accents */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[25vw] h-[25vw] min-w-[300px] min-h-[300px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] min-w-[300px] min-h-[300px] bg-brand-purple/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-screen-2xl">
                <div className="max-w-5xl 2xl:max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-primary font-mono mb-4 text-[clamp(0.875rem,2vw,1.125rem)] tracking-widest uppercase font-bold">Hi, my name is</h2>
                        <h1 className="text-[clamp(2.5rem,8vw,6rem)] 2xl:text-[clamp(5rem,10vw,9rem)] font-black mb-6 tracking-tighter leading-[1.1]">
                            Aravindakumar Mahesh.
                            <br />
                            <span className="text-muted-foreground/60">I build pixel-perfect digital experiences.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[clamp(1rem,2.5vw,1.25rem)] lg:text-[clamp(1.25rem,2vw,1.5rem)] text-muted-foreground mb-10 max-w-2xl 2xl:max-w-4xl leading-relaxed"
                    >
                        I&apos;m a <span className="text-foreground font-semibold">Full Stack Developer</span> specialized in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products using <span className="text-brand-blue">React</span>, <span className="text-brand-purple">Nest</span>, and <span className="text-brand-emerald">PostgreSQL</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center"
                    >
                        <Link href="#projects" className="w-full sm:w-auto">
                            <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold w-full">
                                View Projects <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <a href="https://drive.google.com/file/d/1W69waCPbQJipJm3ARIwlLYr-yk1qsaew/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-bold glass whitespace-nowrap w-full">
                                Download Resume <Download className="ml-2 w-5 h-5" />
                            </Button>
                        </a>

                        <div className="flex items-center gap-6 mt-4 sm:mt-0 px-2 lg:ml-4">
                            <a href="https://github.com/Aravindakumar2002" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                                <Github className="w-7 h-7" />
                            </a>
                            <a href="https://www.linkedin.com/in/aravindakumar-mahesh-41168625a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                                <Linkedin className="w-7 h-7" />
                            </a>
                            <a href="mailto:aravind.mahesh2305@gmail.com" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
                                <Mail className="w-7 h-7" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};
