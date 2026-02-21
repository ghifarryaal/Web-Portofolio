'use client';

import { motion } from 'framer-motion';

const stats = [
    {
        icon: '👥', value: '50+', label: 'Members Led',
        description: 'Managed teams across faculty, community, and organizational bodies',
        color: 'from-cyan-500/10', border: 'border-cyan-500/20', accent: 'text-cyan-400',
    },
    {
        icon: '📋', value: '50+', label: 'Programs Managed',
        description: 'Planned, directed, and executed organizational programs end-to-end',
        color: 'from-violet-500/10', border: 'border-violet-500/20', accent: 'text-violet-400',
    },
    {
        icon: '🏛️', value: '4+', label: 'Organizations Coordinated',
        description: 'Led cross-organizational coordination and strategic alignment',
        color: 'from-emerald-500/10', border: 'border-emerald-500/20', accent: 'text-emerald-400',
    },
    {
        icon: '🏆', value: '#1', label: 'National Team Award',
        description: 'Best Regional Team — Sobat Bumi Indonesia national recognition',
        color: 'from-amber-500/10', border: 'border-amber-500/20', accent: 'text-amber-400',
    },
];

export default function Leadership() {
    return (
        <section id="leadership" className="py-24 px-6">
            <div className="divider mb-24" />
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <span className="section-label">Organizational Impact</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Leadership &amp; <span className="gradient-text">Impact</span>
                    </h2>
                    <p className="text-gray-600 text-sm mt-3 max-w-lg">
                        Proven track record of leading people, programs, and governance at organizational scale.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className={`glass glass-hover rounded-2xl p-6 border ${s.border} bg-gradient-to-br ${s.color} to-transparent`}
                        >
                            <div className="text-3xl mb-4">{s.icon}</div>
                            <p className={`text-4xl font-black mb-1 ${s.accent}`}>{s.value}</p>
                            <p className="text-sm font-bold text-white mb-2 leading-snug">{s.label}</p>
                            <p className="text-[11px] text-gray-600 leading-relaxed">{s.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Leadership philosophy banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-6 border border-white/8 flex flex-col md:flex-row items-center gap-6"
                >
                    <div className="text-4xl flex-shrink-0">⚡</div>
                    <div>
                        <p className="text-sm font-bold text-white mb-1">Leadership Philosophy</p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            I lead with <span className="text-white font-medium">structured thinking</span>,{' '}
                            <span className="text-white font-medium">high ownership</span>, and a{' '}
                            <span className="text-white font-medium">builder mindset</span> — combining strategic clarity with
                            operational execution to drive measurable outcomes across teams and programs.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
