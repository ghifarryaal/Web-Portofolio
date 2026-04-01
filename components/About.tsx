'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-28 px-6">
            <div className="divider mb-28" />
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
                        Bridging <span className="gradient-text">Strategy</span> &amp; Execution
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* ── Left col: Circular Photo + Stats ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 flex flex-col items-center"
                    >
                        <div className="relative w-64 h-64 md:w-72 md:h-72 mb-10">
                            {/* Outer Glow */}
                            <div className="absolute inset-0 rounded-full blur-3xl bg-violet-600/20 group-hover:bg-violet-600/30 transition-colors duration-700" />

                            {/* Circular Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 p-2 glass">
                                <div className="relative w-full h-full rounded-full overflow-hidden">
                                    <Image
                                        src="/Logo/Foto Isa.jpg"
                                        alt="Isa Al Ghifary Ahmad"
                                        fill
                                        className="object-cover object-top scale-[1.3] transition-transform duration-700 hover:scale-[1.4]"
                                        sizes="(max-width: 768px) 256px, 288px"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-xl shadow-2xl">
                                🇮🇩
                            </div>
                            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-500/30 flex items-center justify-center text-lg shadow-xl">
                                👨‍💻
                            </div>
                        </div>

                        {/* Personality traits moved here for balance */}
                        <div className="w-full space-y-3">
                            {[
                                { emoji: '⚡', trait: 'High Ownership', color: 'text-amber-400' },
                                { emoji: '🏗️', trait: 'Builder Mindset', color: 'text-cyan-400' },
                                { emoji: '🧭', trait: 'Structured Thinker', color: 'text-violet-400' },
                                { emoji: '🤝', trait: 'People-First Leader', color: 'text-emerald-400' },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.trait}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 glass px-4 py-2.5 rounded-2xl border border-white/5"
                                >
                                    <span className="text-lg">{item.emoji}</span>
                                    <span className={`text-xs font-bold ${item.color} uppercase tracking-wider`}>{item.trait}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right col: Description + Stats + Cards ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 space-y-8"
                    >
                        <div className="space-y-6">
                            <p className="text-xl text-white font-medium leading-relaxed">
                                I am a technology professional exploring the intersection of business and IT,
                                with a track record in leading technology-driven initiatives.
                            </p>
                            <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
                                My expertise focuses on building digital platforms, managing structured workflows, and
                                aligning business objectives with technology execution. I have led multiple cross-functional
                                teams, developed blockchain-based and data-driven platforms, and managed large-scale
                                organizational programs involving over{' '}
                                <span className="text-white font-medium">50 members and stakeholders</span>.
                            </p>
                            <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
                                My approach combines strategic thinking, structured execution, stakeholder alignment, and
                                outcome-focused leadership — delivering solutions that are both technically sound and
                                business-relevant.
                            </p>
                        </div>

                        {/* Cards section */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Quick Stats Grid */}
                            <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { value: '50+', label: 'Members Led', color: 'from-cyan-400/20' },
                                    { value: '4+', label: 'Organizations', color: 'from-emerald-400/20' },
                                ].map((stat) => (
                                    <div key={stat.label} className={`glass rounded-3xl p-5 flex flex-col justify-center items-center text-center bg-gradient-to-br ${stat.color} to-transparent border border-white/5`}>
                                        <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                                <div className="col-span-2 md:col-span-1 glass rounded-3xl p-4 flex flex-col items-center justify-center gap-2 border border-white/5 bg-gradient-to-br from-violet-500/10 to-transparent">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-xl mb-1">📍</div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-white uppercase tracking-widest">Location</p>
                                        <p className="text-sm text-gray-400">Karawang, ID</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
