"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "unverified">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Formspree AJAX submission (requires /f/ even for emails)
            const response = await fetch("https://formspree.io/f/aravind.mahesh2305@gmail.com", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                // Check if it's an unverified or setup error
                const errorMessage = result.error || result.errors?.[0]?.message || "";
                if (errorMessage.toLowerCase().includes("verified") || errorMessage.toLowerCase().includes("set up")) {
                    setStatus("unverified");
                } else {
                    console.error("Formspree Error:", result);
                    setStatus("error");
                }
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-[clamp(4rem,10vw,8rem)] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-primary font-mono mb-2 text-sm uppercase tracking-[0.3em] font-bold">Get In Touch</h2>
                        <h3 className="text-[clamp(2rem,6vw,4.5rem)] font-black tracking-tight">
                            Let&apos;s Build Something <span className="text-gradient">Together</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
                            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                                Currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                            </p>

                            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-col lg:gap-8 max-w-2xl mx-auto lg:mx-0">
                                {[
                                    { icon: <Mail className="text-brand-blue" />, label: "Email", value: "aravind.mahesh2305@gmail.com", color: "hover:bg-brand-blue/10" },
                                    { icon: <Phone className="text-brand-purple" />, label: "Phone", value: "+91 87541 91572", color: "hover:bg-brand-purple/10" },
                                    { icon: <MapPin className="text-brand-emerald" />, label: "Location", value: "Chennai, India", color: "hover:bg-brand-emerald/10" },
                                ].map((item) => (
                                    <div key={item.label} className={`flex gap-6 items-center p-6 glass rounded-3xl group transition-all duration-300 border border-white/5 ${item.color}`}>
                                        <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform shadow-xl">{item.icon}</div>
                                        <div>
                                            <p className="text-xs md:text-sm text-muted-foreground uppercase font-black tracking-widest mb-1">{item.label}</p>
                                            <p className="text-lg md:text-xl font-black break-all">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 md:p-12 lg:p-14 rounded-[3rem] space-y-8 border border-white/10 shadow-3xl relative overflow-hidden group"
                            onSubmit={handleSubmit}
                        >
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] group-focus-within:bg-primary/20 transition-all" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                <div className="space-y-3">
                                    <label className="text-sm font-black uppercase tracking-widest ml-1 text-muted-foreground">Your Name</label>
                                    <Input name="name" required placeholder="John Doe" className="h-16 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-lg px-6" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black uppercase tracking-widest ml-1 text-muted-foreground">Your Email</label>
                                    <Input name="email" type="email" required placeholder="john@example.com" className="h-16 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-lg px-6" />
                                </div>
                            </div>
                            <div className="space-y-3 relative z-10">
                                <label className="text-sm font-black uppercase tracking-widest ml-1 text-muted-foreground">Subject</label>
                                <Input name="subject" required placeholder="Project Inquiry" className="h-16 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-lg px-6" />
                            </div>
                            <div className="space-y-3 relative z-10">
                                <label className="text-sm font-black uppercase tracking-widest ml-1 text-muted-foreground">Message</label>
                                <Textarea name="message" required placeholder="Tell me about your project..." className="bg-white/5 border-white/10 min-h-[180px] rounded-2xl focus:bg-white/10 transition-all text-lg p-6" />
                            </div>

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex items-center justify-center gap-3 p-4 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                                        <CheckCircle2 size={24} />
                                        <span className="font-bold">Message sent successfully!</span>
                                    </motion.div>
                                ) : status === "unverified" ? (
                                    <motion.div key="unverified" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-3 p-6 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
                                        <div className="flex items-center gap-3">
                                            <AlertCircle size={24} />
                                            <span className="font-bold">Check your email to verify!</span>
                                        </div>
                                        <p className="text-sm">Formspree requires you to click an activation link in your inbox for the first message.</p>
                                    </motion.div>
                                ) : (
                                    <Button key="submit-btn" disabled={status === "loading"} type="submit" size="lg" className="w-full rounded-2xl gap-3 h-16 text-xl font-black shadow-2xl shadow-primary/20 relative z-10 overflow-hidden group/btn disabled:opacity-70">
                                        <span className="relative z-10">{status === "loading" ? "Sending..." : "Send Message"}</span>
                                        {status === "loading" ? <Loader2 size={22} className="relative z-10 animate-spin" /> : <Send size={22} className="relative z-10 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-brand-purple opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                    </Button>
                                )}
                            </AnimatePresence>

                            {status === "error" && (
                                <div className="flex flex-col gap-2">
                                    <p className="text-red-400 text-center text-sm font-bold flex items-center justify-center gap-2">
                                        <AlertCircle size={16} /> Something went wrong.
                                    </p>
                                    <p className="text-muted-foreground text-center text-[10px] uppercase tracking-wider">
                                        Note: Ad-blockers can sometimes block form submissions.
                                    </p>
                                </div>
                            )}
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
