'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CERT_URLS = {
    sobatBumi: 'https://drive.google.com/file/d/1xPGt4CTp9M1nu0ZPvGIDh5sSZK8oHzh2/view?usp=drive_link',
    compfair: 'https://drive.google.com/file/d/1ZyaKztY5B745-mAtoA9aax-x-XVu3aCQ/view?usp=drive_link',
    top10: 'https://drive.google.com/file/d/1ffhcybZrRylDr1CY0rNqyJ7WJXYKOgun/view?usp=drive_link',
    top30: 'https://drive.google.com/file/d/1Ob6JR8xHHQxAt9ek86m03HJeiX2DcgIz/view?usp=drive_link',
    beasiswa: 'https://drive.google.com/file/d/15hioEBgULbiGjOg2-L3d-8vRPxlFZOBR/view?usp=drive_link',
    dutaSaham: 'https://drive.google.com/file/d/1afjn5rscJAxWL5XoK0dCPiEgcVc6v-tL/view?usp=drive_link',
};

const achievements = [
    {
        icon: '🏆',
        title: 'Best Regional Team — Sobat Bumi Indonesia',
        subtitle: 'Pertamina Foundation — 2025',
        description: 'Led Sobat Bumi Karawang to the national award for Best Regional Team across all Sobat Bumi Indonesia chapters.',
        color: 'from-amber-500/10', border: 'border-amber-500/20', dot: 'bg-amber-400', cert: CERT_URLS.sobatBumi,
    },
    {
        icon: '🥇',
        title: '1st Winner — Business Plan Competition',
        subtitle: 'Compfair 2024',
        description: 'Won 1st place in a competitive university-level business plan competition with an innovative tech startup concept.',
        color: 'from-cyan-500/10', border: 'border-cyan-500/20', dot: 'bg-cyan-400', cert: CERT_URLS.compfair,
    },
    {
        icon: '🏅',
        title: 'Top 10 Finalist — National Business Plan Competition',
        subtitle: 'Creative Summit 2024 — Universitas Negeri Yogyakarta',
        description: 'Reached Top 10 nationally in the Creative Summit National Business Plan Competition held at Universitas Negeri Yogyakarta.',
        color: 'from-orange-500/10', border: 'border-orange-500/20', dot: 'bg-orange-400', cert: CERT_URLS.top10,
    },
    {
        icon: '🎖️',
        title: 'Top 30 Finalist — National Business Plan Competition',
        subtitle: 'National Level Finalist',
        description: 'Reached the Top 30 nationally in a highly competitive national business plan competition.',
        color: 'from-violet-500/10', border: 'border-violet-500/20', dot: 'bg-violet-400', cert: CERT_URLS.top30,
    },
    {
        icon: '🌱',
        title: 'Pertamina Sobat Bumi Scholarship Awardee',
        subtitle: 'Pertamina Foundation — PF 11',
        description: 'Awarded the Pertamina Foundation scholarship for academic excellence and outstanding leadership contributions.',
        color: 'from-emerald-500/10', border: 'border-emerald-500/20', dot: 'bg-emerald-400', cert: CERT_URLS.beasiswa,
    },
    {
        icon: '📈',
        title: 'Sharia Stock Ambassador 2025',
        subtitle: 'Duta Saham Syariah — National',
        description: 'Selected as a national ambassador promoting sharia-compliant stock investment and financial literacy programs.',
        color: 'from-rose-500/10', border: 'border-rose-500/20', dot: 'bg-rose-400', cert: CERT_URLS.dutaSaham,
    },
];

export default function Achievements() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="achievements" className="py-24 px-6">
            <div className="divider mb-24" />
            <div className="container mx-auto max-w-5xl" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-14"
                >
                    <span className="section-label">Recognition</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Achievements &amp; <span className="gradient-text">Awards</span>
                    </h2>
                    <p className="text-gray-600 text-sm mt-3 max-w-md">
                        Verified certificates available via Google Drive on each card.
                    </p>
                </motion.div>

                <div className="space-y-3">
                    {achievements.map((a, i) => (
                        <motion.div
                            key={a.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.09 }}
                            className={`glass glass-hover rounded-2xl border ${a.border} bg-gradient-to-r ${a.color} to-transparent`}
                        >
                            <div className="flex items-center justify-between gap-4 p-5">
                                <div className="flex items-start gap-4 flex-1 min-w-0">
                                    <span className="text-2xl flex-shrink-0">{a.icon}</span>
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                            <h3 className="text-sm font-bold text-white leading-tight">{a.title}</h3>
                                            <span className={`w-1.5 h-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                                            <span className="text-xs text-gray-600">{a.subtitle}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed hidden sm:block">{a.description}</p>
                                    </div>
                                </div>
                                <a
                                    href={a.cert}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass border border-white/10 text-[11px] font-semibold text-gray-400 hover:text-white hover:border-white/20 transition-all whitespace-nowrap"
                                >
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    View Certificate
                                </a>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed sm:hidden px-5 pb-4">{a.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
