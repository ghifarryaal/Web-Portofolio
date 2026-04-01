'use client';

import { motion } from 'framer-motion';

const capabilities = [
    'Build end-to-end technology platforms',
    'Develop data-driven decision systems',
    'Lead cross-functional teams',
    'Design business and product strategies',
    'Execute structured, scalable initiatives',
];

const pillars = [
    { icon: '🏗️', label: 'Builder', color: 'text-cyan-400' },
    { icon: '📊', label: 'Analyst', color: 'text-violet-400' },
    { icon: '🧭', label: 'Strategist', color: 'text-amber-400' },
    { icon: '👥', label: 'Leader', color: 'text-emerald-400' },
];

export default function Summary() {
    return (
        <section id="summary" className="py-24 px-6">
            <div className="divider mb-24" />
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="section-label">Who I Am</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Professional <span className="gradient-text">Summary</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Main text */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 space-y-8"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Technology-focused business professional with proven experience in building{' '}
                            <span className="text-white font-semibold">digital platforms</span>, developing{' '}
                            <span className="text-white font-semibold">workflow automation systems</span>, and leading{' '}
                            strategic initiatives across technology and organizational environments.
                        </p>
                        <p className="text-base text-gray-500 leading-relaxed">
                            Proven track record in combining business thinking, product execution, and data analysis
                            to deliver meaningful, measurable impact.
                        </p>

                        {/* Capability checklist */}
                        <div className="glass rounded-2xl p-6 border border-white/8 space-y-3">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Demonstrated Ability To</p>
                            {capabilities.map((cap, i) => (
                                <motion.div
                                    key={cap}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-300">{cap}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Pillars */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-5">Professional Identity</p>
                        {pillars.map((p, i) => (
                            <motion.div
                                key={p.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 6 }}
                                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 border border-white/8"
                            >
                                <span className="text-2xl">{p.icon}</span>
                                <div>
                                    <p className={`text-base font-bold ${p.color}`}>{p.label}</p>
                                    <p className="text-xs text-gray-600 mt-0.5">Core professional identity</p>
                                </div>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
