'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const achievements = [
    {
        title: 'Best Regional Team — Sobat Bumi Indonesia',
        subtitle: 'Pertamina Foundation — 2025',
        description: 'Led Sobat Bumi Karawang to the national award for Best Regional Team across all Sobat Bumi Indonesia chapters.',
        cert: 'https://drive.google.com/file/d/1xPGt4CTp9M1nu0ZPvGIDh5sSZK8oHzh2/view',
    },
    {
        title: 'Top 20 Finalist — OJK Fintech Startup Accelerator',
        subtitle: 'OJK RI — 2026',
        description: 'Selected as a Top 20 finalist in the OJK Fintech Startup Accelerator Program with Tixchain.id, focusing on blockchain-based ticketing.',
        cert: 'https://drive.google.com/file/d/1b9EF1SBCJd8OjQiwCgpz9VXYtQLYGzER/view',
    },
    {
        title: '1st Winner — Business Plan Competition',
        subtitle: 'Compfair 2024',
        description: 'Won 1st place in a competitive university-level business plan competition with an innovative tech startup concept.',
        cert: 'https://drive.google.com/file/d/1ZyaKztY5B745-mAtoA9aax-x-XVu3aCQ/view',
    },
    {
        title: 'Top 10 Finalist — National Business Plan Competition',
        subtitle: 'Creative Summit 2024 — Universitas Negeri Yogyakarta',
        description: 'Reached Top 10 nationally in the Creative Summit National Business Plan Competition held at Universitas Negeri Yogyakarta.',
        cert: 'https://drive.google.com/file/d/1ffhcybZrRylDr1CY0rNqyJ7WJXYKOgun/view',
    },
    {
        title: 'Top 30 Finalist — National Business Plan Competition',
        subtitle: 'National Level Finalist',
        description: 'Reached the Top 30 nationally in a highly competitive national business plan competition.',
        cert: 'https://drive.google.com/file/d/1Ob6JR8xHHQxAt9ek86m03HJeiX2DcgIz/view',
    },
    {
        title: 'Pertamina Sobat Bumi Scholarship Awardee',
        subtitle: 'Pertamina Foundation — PF 11',
        description: 'Awarded the Pertamina Foundation scholarship for academic excellence and outstanding leadership contributions.',
        cert: 'https://drive.google.com/file/d/15hioEBgULbiGjOg2-L3d-8vRPxlFZOBR/view',
    },
    {
        title: 'Sharia Stock Ambassador 2025',
        subtitle: 'Duta Saham Syariah — National',
        description: 'Selected as a national ambassador promoting sharia-compliant stock investment and financial literacy programs.',
        cert: 'https://drive.google.com/file/d/1afjn5rscJAxWL5XoK0dCPiEgcVc6v-tL/view',
    },
];

export default function Achievements() {
    return (
        <main className="min-h-screen">
            <section id="achievements" className="px-6 pt-32 pb-20 md:pb-28">
                <div className="container mx-auto max-w-5xl">
                    {/* Header */}
                    <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:col-span-4"
                        >
                            <p className="section-num">01</p>
                            <h1 className="serif text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.05]">
                                Achievements<br /><span className="italic-serif text-[var(--accent)]">& awards</span>
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="md:col-span-8"
                        >
                            <p className="text-[16px] text-[var(--muted)] leading-[1.75] max-w-2xl">
                                Recognition, awards, and scholarships earned through competition, leadership, and
                                academic work. Verified certificates available on each entry.
                            </p>
                        </motion.div>
                    </div>

                    {/* Education block (merged) */}
                    <motion.div
                        id="education"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <p className="section-num">02</p>
                        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                            <div className="md:col-span-4 flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Image
                                        src="/Logo/Logo Unsika.webp"
                                        alt="Universitas Singaperbangsa Karawang"
                                        fill
                                        className="object-contain p-2"
                                        sizes="56px"
                                    />
                                </div>
                                <div>
                                    <h2 className="serif text-lg md:text-xl text-white font-medium leading-tight">
                                        Education
                                    </h2>
                                    <p className="text-[12px] text-[var(--dim)] font-mono mt-1">2022 — 2026</p>
                                </div>
                            </div>

                            <div className="md:col-span-8 grid sm:grid-cols-3 gap-6">
                                <div>
                                    <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--dim)] mb-2">
                                        University
                                    </p>
                                    <p className="text-[14px] text-white font-medium leading-snug">
                                        Universitas Singaperbangsa Karawang
                                    </p>
                                    <p className="text-[12px] text-[var(--muted)] mt-1">
                                        Bachelor of Information Systems
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--dim)] mb-2">
                                        GPA
                                    </p>
                                    <p className="serif text-2xl text-[var(--accent)] font-light">3.93</p>
                                    <p className="text-[12px] text-[var(--muted)] mt-1">out of 4.00</p>
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--dim)] mb-2">
                                        Focus areas
                                    </p>
                                    <p className="text-[14px] text-white font-medium leading-snug">
                                        IT, Product, Data
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="editorial-rule mb-14" />

                    {/* Achievements list — editorial numbered */}
                    <div className="space-y-px bg-white/8">
                        {achievements.map((a, i) => (
                            <motion.div
                                key={a.title}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                                viewport={{ once: true }}
                                className="bg-[#0a0a0c] group"
                            >
                                <div className="grid md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-8 hover:bg-[#0f0f12] transition-colors">
                                    <div className="md:col-span-1">
                                        <span className="num-marker text-2xl md:text-3xl">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="md:col-span-7">
                                        <h3 className="serif text-[20px] md:text-[22px] font-medium text-white leading-snug mb-1">
                                            {a.title}
                                        </h3>
                                        <p className="text-[12px] text-[var(--dim)] font-mono mb-3">
                                            {a.subtitle}
                                        </p>
                                        <p className="text-[14px] text-[var(--muted)] leading-[1.65] max-w-2xl">
                                            {a.description}
                                        </p>
                                    </div>
                                    <div className="md:col-span-4 flex md:justify-end items-start">
                                        <a
                                            href={a.cert}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                                        >
                                            <span>View certificate</span>
                                            <span aria-hidden>↗</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
