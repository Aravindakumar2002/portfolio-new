"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-16 md:py-24 border-t border-white/5 relative overflow-hidden bg-black/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <h4 className="text-3xl font-black mb-3">Aravind<span className="text-primary">.dev</span></h4>
                        <p className="text-base text-muted-foreground font-medium">© 2026 Aravindakumar Mahesh. All rights reserved.</p>
                        <p className="text-sm text-muted-foreground/60 mt-1">Full Stack Developer | Based in Chennai, India</p>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                        {[
                            { icon: <Github size={24} />, href: "https://github.com/Aravindakumar2002" },
                            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/aravindakumar-mahesh-41168625a/" },
                            { icon: <Mail size={24} />, href: "mailto:aravind.mahesh2305@gmail.com" },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="p-4 glass rounded-2xl hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-2 border border-white/5 shadow-xl"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-16 h-16 rounded-[1.5rem] glass border border-white/10 shadow-2xl hover:bg-primary hover:text-white transition-all"
                            onClick={scrollToTop}
                        >
                            <ChevronUp size={32} />
                        </Button>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Top</span>
                    </motion.div>
                </div>

                <div className="mt-20 pt-12 border-t border-white/5 text-center">
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.4em] font-bold">
                        Built with <span className="text-primary">Next.js 16</span> • <span className="text-brand-purple">TypeScript</span> • <span className="text-brand-emerald">Tailwind CSS</span> • <span className="text-blue-400">Framer Motion</span>
                    </p>
                </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        </footer>
    );
};
