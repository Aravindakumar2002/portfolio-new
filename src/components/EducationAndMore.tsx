"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const EducationAndMore = () => {
    return (
        <section className="py-24 md:py-32 bg-black/5 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 2xl:gap-32">
                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-5 mb-12">
                            <div className="p-4 bg-brand-blue/20 rounded-2xl text-brand-blue shadow-xl shadow-brand-blue/10 border border-brand-blue/20">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Education</h3>
                                <p className="text-muted-foreground font-medium">Academic foundation</p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 md:p-12 rounded-[2.5rem] border-l-8 border-brand-blue relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                <GraduationCap size={120} />
                            </div>
                            <h4 className="text-2xl sm:text-3xl font-black mb-3 leading-tight group-hover:text-brand-blue transition-colors">Bachelor of Computer Applications (BCA)</h4>
                            <p className="text-xl md:text-2xl text-brand-blue font-bold mb-6">MDT Hindu College, Tirunelveli</p>
                            <div className="flex items-center gap-2">
                                <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm sm:text-base font-bold text-muted-foreground">
                                    Class of 2022
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Certifications & Languages */}
                    <div className="flex flex-col gap-16 md:gap-20">
                        <div>
                            <div className="flex items-center gap-5 mb-10">
                                <div className="p-4 bg-brand-purple/20 rounded-2xl text-brand-purple shadow-xl shadow-brand-purple/10 border border-brand-purple/20">
                                    <Award size={28} />
                                </div>
                                <div>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Certifications</h3>
                                    <p className="text-muted-foreground font-medium">Professional development</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                {[
                                    { title: "Full Stack Development Course", provider: "Great Minds Technology, Chennai", date: "Feb 2023" },
                                    { title: "Hackathon Participant – Codukalam", provider: "Technical Challenge", date: "July 2023" }
                                ].map((cert, idx) => (
                                    <motion.div
                                        key={cert.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="glass p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:border-brand-purple/30 transition-all border border-white/5"
                                    >
                                        <div>
                                            <h5 className="text-lg md:text-xl font-black group-hover:text-brand-purple transition-colors mb-1">{cert.title}</h5>
                                            <p className="text-sm md:text-base text-muted-foreground font-medium">{cert.provider}</p>
                                        </div>
                                        <span className="text-xs md:text-sm font-black text-muted-foreground uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full whitespace-nowrap">
                                            {cert.date}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-5 mb-8">
                                <div className="p-4 bg-brand-emerald/20 rounded-2xl text-brand-emerald shadow-xl shadow-brand-emerald/10 border border-brand-emerald/20">
                                    <Languages size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight">Languages</h3>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {["Tamil", "English", "Technical Proficiency"].map((lang) => (
                                    <span key={lang} className="px-8 py-3 glass rounded-2xl text-base md:text-lg font-bold border border-white/10 hover:border-brand-emerald/40 hover:text-brand-emerald transition-all cursor-default">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
