'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Education() {
    return (
        <section id="education" className="py-24 px-6">
            <div className="divider mb-24" />
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <span className="section-label">Academic Background</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Education
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="glass glass-hover rounded-2xl p-8 border border-violet-500/20 bg-gradient-to-br from-violet-500/8 to-transparent relative overflow-hidden"
                >
                    {/* Glow */}
                    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] bg-violet-600/20 pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-[60px] bg-cyan-600/10 pointer-events-none" />

                    <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                        {/* Logo */}
                        <div className="flex-shrink-0 relative w-16 h-16 rounded-2xl bg-white/5 border border-violet-500/30 overflow-hidden flex items-center justify-center">
                            <Image
                                src="/Logo/Logo Unsika.png"
                                alt="Universitas Singaperbangsa Karawang"
                                fill
                                className="object-contain p-2"
                                sizes="64px"
                            />
                        </div>


                        {/* Main info */}
                        <div className="flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Universitas Singaperbangsa Karawang</h3>
                                    <p className="text-sm text-gray-400 mb-0.5">Bachelor of Information Systems</p>
                                    <p className="text-xs font-mono text-gray-600">2022 – Present</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-black gradient-text leading-none">3.92</p>
                                    <p className="text-xs text-gray-600 mt-1 font-semibold uppercase tracking-wider">GPA / 4.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative h-px bg-white/5 my-7" />

                    {/* Highlights */}
                    <div className="relative grid sm:grid-cols-3 gap-4">
                        {[
                            { icon: '🏆', label: 'Academic Achievement', value: 'Top GPA — 3.92/4.00' },
                            { icon: '📚', label: 'Field of Study', value: 'Information Systems' },
                            { icon: '🎯', label: 'Focus Areas', value: 'IT, Product, Data' },
                        ].map((item) => (
                            <div key={item.label} className="glass rounded-xl p-4 border border-white/5">
                                <span className="text-xl mb-2 block">{item.icon}</span>
                                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                <p className="text-sm text-white font-semibold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
