'use client';

import { motion } from 'framer-motion';

const capabilities = [
    'Build end-to-end technology platforms',
    'Develop data-driven decision systems',
    'Lead cross-functional teams',
    'Design business and product strategies',
    'Execute structured, scalable initiatives',
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

                <div className="max-w-3xl mx-auto">
                    {/* Main text */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-center"
                    >
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                            Technology-focused business professional with proven experience in building{' '}
                            <span className="text-white font-semibold">digital platforms</span>, developing{' '}
                            <span className="text-white font-semibold">workflow automation systems</span>, and leading{' '}
                            strategic initiatives across technology and organizational environments.
                        </p>
                        <p className="text-base text-gray-500 leading-relaxed">
                            Proven track record in combining business thinking, product execution, and data analysis
                            to deliver meaningful, measurable impact.
                        </p>

                        {/* Capability checklist - Optimized for mobile */}
                        <div className="glass rounded-3xl p-6 md:p-10 border border-white/8 grid md:grid-cols-2 gap-x-8 gap-y-4 text-left">
                            <p className="col-span-full text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Demonstrated Ability To</p>
                            {capabilities.map((cap, i) => (
                                <motion.div
                                    key={cap}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
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
                </div>
            </div>
        </section>
    );
}
