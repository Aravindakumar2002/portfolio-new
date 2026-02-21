"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <Code2 className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
                    <span className="text-xl sm:text-2xl font-bold tracking-tight">
                        Aravind<span className="text-primary">.dev</span>
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-sm lg:text-base font-medium hover:text-primary transition-colors hover:scale-105 inline-block"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <a href="https://drive.google.com/file/d/1W69waCPbQJipJm3ARIwlLYr-yk1qsaew/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="glass border-primary/30 hover:bg-primary/10 px-6 font-bold">
                            Resume
                        </Button>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        className="glass rounded-full"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-[100%] left-4 right-4 md:hidden glass rounded-3xl mt-4 border border-white/10 shadow-2xl overflow-hidden z-[60]"
                    >
                        <div className="flex flex-col gap-2 p-8">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={link.name}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-bold hover:text-primary transition-all p-2 block border-b border-white/5"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <a href="https://drive.google.com/file/d/1W69waCPbQJipJm3ARIwlLYr-yk1qsaew/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className="w-full mt-6 h-14 text-lg font-bold rounded-2xl">
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
