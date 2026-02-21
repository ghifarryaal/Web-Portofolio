'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
    {
        period: 'May 2024 – Present',
        role: 'Founder & CEO',
        org: 'Tixchain.id',
        type: 'Startup',
        dotColor: 'bg-cyan-400',
        borderColor: 'border-cyan-500/20',
        glowColor: 'bg-cyan-500/10',
        tagBg: 'bg-cyan-500/10 text-cyan-400',
        badge: null,
        logo: '/Logo/tixchain-type-white.png',
        bullets: [
            'Founded and developed blockchain-based NFT ticketing platform',
            'Designed product strategy, business model, and technology architecture',
            'Led product development, validation, and platform iteration',
            'Secured IDR 10 million in initial project funding',
        ],
    },
    {
        period: 'Jan 2025 – Dec 2025',
        role: 'President',
        org: 'Sobat Bumi Karawang — Pertamina Foundation',
        type: 'Leadership',
        dotColor: 'bg-emerald-400',
        borderColor: 'border-emerald-500/20',
        glowColor: 'bg-emerald-500/10',
        tagBg: 'bg-emerald-500/10 text-emerald-400',
        badge: '🏆 Best Regional Team — Sobat Bumi Indonesia',
        logo: '/Logo/LOGO SOBAT BUMI KARAWANG TRANSPARAN (1).png',
        bullets: [
            'Led Sobat Bumi Karawang to win Best Regional Team in Sobat Bumi Indonesia',
            'Led sustainability, social, and community impact programs at regional level',
            'Managed multi-stakeholder planning, coordination, and execution',
            'Directed environmental and community initiatives under Pertamina Foundation',
        ],
    },
    {
        period: 'Jan 2025 – Dec 2025',
        role: 'President',
        org: 'Faculty Student Legislative Board (Fasilkom UNSIKA)',
        type: 'Governance',
        dotColor: 'bg-violet-400',
        borderColor: 'border-violet-500/20',
        glowColor: 'bg-violet-500/10',
        tagBg: 'bg-violet-500/10 text-violet-400',
        badge: null,
        logo: '/Logo/Logo BLM.png',
        bullets: [
            'Led faculty-level governance and strategic organizational initiatives',
            'Managed cross-organizational coordination across 4 student bodies',
            'Oversaw organizational structure, compliance, and performance accountability',
        ],
    },
    {
        period: 'Jan 2024 – Dec 2024',
        role: 'Head of Commission B',
        org: 'Badan Legislatif Mahasiswa Fakultas Ilmu Komputer — Karawang, West Java',
        type: 'Governance',
        dotColor: 'bg-blue-400',
        borderColor: 'border-blue-500/20',
        glowColor: 'bg-blue-500/10',
        tagBg: 'bg-blue-500/10 text-blue-400',
        badge: null,
        logo: '/Logo/Logo BLM.png',
        subtitle: 'Organizational Oversight & Budgetary Control',
        bullets: [
            'Managed and evaluated 50+ work programs across 4 student organizations, ensuring alignment with grand design, vision, and mission',
            'Led budget planning and allocation for faculty-level student funding, ensuring efficient and accountable financial usage',
            'Conducted program controlling and performance evaluation, improving execution quality and organizational effectiveness',
        ],
    },
    {
        period: 'Sept 2024 – Dec 2024',
        role: 'Data Analyst Trainee',
        org: 'Bitlabs Academy',
        type: 'Training',
        dotColor: 'bg-rose-400',
        borderColor: 'border-rose-500/20',
        glowColor: 'bg-rose-500/10',
        tagBg: 'bg-rose-500/10 text-rose-400',
        badge: null,
        logo: '/Logo/bitlabs.png',
        bullets: [
            'Applied SQL and Python for structured data analysis and pipeline building',
            'Performed end-to-end data workflows from extraction to visualization',
            'Delivered data-driven insights and recommendations for business decisions',
        ],
    },
    {
        period: 'Jan 2023 - Dec 2023',
        role: 'Staff of Cadre Development',
        org: 'HIMSIKA — Himpunan Mahasiswa Sistem Informasi',
        type: 'Organization',
        dotColor: 'bg-amber-400',
        borderColor: 'border-amber-500/20',
        glowColor: 'bg-amber-500/10',
        tagBg: 'bg-amber-500/10 text-amber-400',
        badge: null,
        logo: '/Logo/Logo Himsika.png',
        bullets: [
            'Developed leadership programs and organizational capacity-building systems',
            'Designed and facilitated cadre training and development programs',
            'Built structured member onboarding and growth frameworks',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="divider mb-24" />
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <span className="section-label">Work & Leadership</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Experience <span className="text-gray-600">&amp; Roles</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <div
                        className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"
                        style={{ marginLeft: '5px' }}
                    />
                    <div className="space-y-10 pl-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={`${exp.org}-${exp.role}`}
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.07 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`absolute -left-8 top-5 w-3 h-3 rounded-full ${exp.dotColor} ring-2 ring-black`}
                                />

                                <div
                                    className={`glass glass-hover rounded-2xl p-6 border ${exp.borderColor} relative overflow-hidden`}
                                >
                                    {/* Glow */}
                                    <div
                                        className={`absolute -top-8 -right-8 w-24 h-24 rounded-full blur-[50px] ${exp.glowColor} pointer-events-none opacity-60`}
                                    />

                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div className="flex items-start gap-3 flex-1 min-w-0">
                                            {/* Logo */}
                                            <div className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                                                <Image
                                                    src={exp.logo}
                                                    alt={exp.org}
                                                    fill
                                                    className="object-contain p-1.5"
                                                    sizes="40px"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-base font-bold text-white leading-tight">{exp.role}</h3>
                                                {'subtitle' in exp && exp.subtitle && (
                                                    <p className="text-xs text-gray-500 font-medium">{exp.subtitle}</p>
                                                )}
                                                <p className="text-xs text-gray-500 mt-0.5">{exp.org}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                                            <span className={`tag ${exp.tagBg}`}>{exp.type}</span>
                                            <span className="text-[11px] font-mono text-gray-600">{exp.period}</span>
                                        </div>
                                    </div>

                                    {/* Achievement badge */}
                                    {exp.badge && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            viewport={{ once: true }}
                                            className="mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold"
                                        >
                                            {exp.badge}
                                        </motion.div>
                                    )}

                                    {/* Bullets */}
                                    <ul className="space-y-1.5">
                                        {exp.bullets.map((b, bi) => (
                                            <li key={bi} className="flex items-start gap-2.5">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0" />
                                                <span className="text-xs text-gray-400 leading-relaxed">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
