'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        period: 'May 2024 — Present',
        role: 'Founder & CEO',
        org: 'Tixchain.id',
        type: 'Startup',
        bullets: [
            'Top 20 Finalist in OJK Fintech Startup Accelerator Program 2026',
            'Founded and developed a blockchain-based NFT ticketing platform',
            'Designed product strategy, business model, and technology architecture',
            'Secured IDR 10 million in initial project funding',
        ],
    },
    {
        period: 'Jan 2025 — Dec 2025',
        role: 'President',
        org: 'Sobat Bumi Karawang — Pertamina Foundation',
        type: 'Leadership',
        bullets: [
            'Led Sobat Bumi Karawang to win Best Regional Team in Sobat Bumi Indonesia',
            'Led sustainability, social, and community impact programs at regional level',
            'Managed multi-stakeholder planning, coordination, and execution',
            'Directed environmental and community initiatives under Pertamina Foundation',
        ],
    },
    {
        period: 'Jan 2025 — Dec 2025',
        role: 'President',
        org: 'Faculty Student Legislative Board (Fasilkom UNSIKA)',
        type: 'Governance',
        bullets: [
            'Led faculty-level governance and strategic organizational initiatives',
            'Managed cross-organizational coordination across 4 student bodies',
            'Oversaw organizational structure, compliance, and performance accountability',
        ],
    },
    {
        period: 'Jan 2024 — Dec 2024',
        role: 'Head of Commission B',
        org: 'Badan Legislatif Mahasiswa Fakultas Ilmu Komputer',
        type: 'Governance',
        bullets: [
            'Managed and evaluated 50+ work programs across 4 student organizations',
            'Led budget planning and allocation for faculty-level student funding',
            'Conducted program controlling and performance evaluation',
        ],
    },
    {
        period: 'Sept 2024 — Dec 2024',
        role: 'Data Analyst Trainee',
        org: 'Bitlabs Academy',
        type: 'Training',
        bullets: [
            'Applied SQL and Python for structured data analysis and pipeline building',
            'Performed end-to-end data workflows from extraction to visualization',
            'Delivered data-driven insights and recommendations for business decisions',
        ],
    },
    {
        period: 'Jan 2023 — Dec 2023',
        role: 'Staff of Cadre Development',
        org: 'HIMSIKA — Himpunan Mahasiswa Sistem Informasi',
        type: 'Organization',
        bullets: [
            'Developed leadership programs and organizational capacity-building systems',
            'Designed and facilitated cadre training and development programs',
            'Built structured member onboarding and growth frameworks',
        ],
    },
];

const projects = [
    {
        title: 'Winjol.com',
        category: 'Full-Stack Development',
        description: 'A decentralized-matching ride-sharing web app that replaces rigid algorithms with an interactive community forum, featuring real-time role-swapping between Customer and Driver modes.',
        tools: ['Next.js', 'Supabase', 'PostgreSQL', 'Real-time'],
        href: 'https://winjol.com',
    },
    {
        title: 'IDX Stock Analysis Platform',
        category: 'Business Intelligence',
        description: 'A workflow-driven stock analysis platform using n8n automation, integrating structured data pipelines and analytical logic to support capital market decision-making.',
        tools: ['n8n', 'Data Pipelines', 'Automation'],
        href: 'https://indonesiastockanalyst.my.id/',
    },
    {
        title: 'Tixchain.id',
        category: 'Web3 & Blockchain',
        description: 'A blockchain-based concert ticketing platform focused on transparency, digital ownership, and fraud prevention. Top 20 OJK Fintech Startup Accelerator 2026.',
        tools: ['Blockchain', 'NFT', 'Product Strategy'],
        href: 'https://tixchain.id/',
    },
    {
        title: 'ZenChain Smart Contract Research',
        category: 'Research & Governance',
        description: 'Developed a blockchain-based smart contract for an e-voting system and published the research in an academic journal.',
        tools: ['Solidity', 'Smart Contracts', 'Research'],
        href: 'https://www.ejournal.pelitaindonesia.ac.id/index.php/JOISIE/article/view/4913/1903',
    },
    {
        title: 'DOKU Wallet Data Analytics',
        category: 'Data Analytics',
        description: 'End-to-end data analysis on e-wallet transaction data using SQL, Python, and visualization tools to generate actionable business insights.',
        tools: ['SQL', 'Python', 'Pandas'],
        href: 'https://drive.google.com/file/d/1sxffJCmll9Afkwd517D7fMGiXTar26tL/view',
    },
    {
        title: 'Market Liquidity & Volatility Platform',
        category: 'Quantitative Finance',
        description: 'A quantitative analysis platform monitoring global financial market structures, bond volatility, interest rate trajectories, and liquidity fluctuations.',
        tools: ['Quant Analysis', 'Financial Modeling', 'Risk'],
        href: 'https://quant.indonesiastockanalyst.my.id/',
    },
    {
        title: 'BundaKu Digital Health Platform',
        category: 'HealthTech Strategy',
        description: 'Led business and product strategy for a digital health platform integrating telemedicine, education, and analytics systems.',
        tools: ['Product Strategy', 'Business Model', 'UX'],
        href: 'https://drive.google.com/drive/folders/1BGM3JPLx_F-M7wu2GDL8gXinj-EApycS',
    },
    {
        title: 'Pake.in — AI Fashion Platform',
        category: 'Consumer AI',
        description: 'Co-developed an AI-powered fashion platform integrating recommendation systems, AR technology, and business analytics for the Indonesian market.',
        tools: ['AI/ML', 'AR', 'Analytics'],
        href: 'https://drive.google.com/drive/folders/1DJ-vUoa5Pkwi6pD_POW10pJkfe_Lywbj',
    },
];

export default function Experience() {
    return (
        <main className="min-h-screen">
            {/* ── Experience Timeline ── */}
            <section id="experience" className="px-6 pt-32 pb-20 md:pb-28">
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
                                Experience<br /><span className="italic-serif text-[var(--accent)]">& roles</span>
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="md:col-span-8"
                        >
                            <p className="text-[16px] text-[var(--muted)] leading-[1.75] max-w-2xl">
                                A timeline of leadership roles, founder work, and professional training — spanning
                                startups, organizational governance, and structured project execution.
                            </p>
                        </motion.div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-8 md:pl-0">
                        {/* Vertical rail (desktop) */}
                        <div className="hidden md:block absolute left-[140px] top-2 bottom-2 w-px bg-white/8" />

                        <div className="space-y-12">
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={`${exp.org}-${exp.role}`}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="md:grid md:grid-cols-[140px_1fr] md:gap-10 relative"
                                >
                                    {/* Date column */}
                                    <div className="md:text-right mb-2 md:mb-0 md:pt-2">
                                        <p className="text-[12px] font-mono text-[var(--dim)] tracking-wide">
                                            {exp.period}
                                        </p>
                                    </div>

                                    {/* Marker dot (desktop) */}
                                    <div className="hidden md:block absolute left-[136px] top-3 w-2 h-2 rounded-full bg-[var(--accent)] ring-4 ring-[#0a0a0c]" />

                                    {/* Content */}
                                    <div className="md:pl-2">
                                        <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                            <h3 className="serif text-xl md:text-2xl font-medium text-white">
                                                {exp.role}
                                            </h3>
                                            <span className="tag">{exp.type}</span>
                                        </div>
                                        <p className="text-[14px] text-[var(--muted)] font-medium mb-4">
                                            {exp.org}
                                        </p>
                                        <ul className="space-y-2">
                                            {exp.bullets.map((b, bi) => (
                                                <li
                                                    key={bi}
                                                    className="flex items-baseline gap-3 text-[14px] text-[var(--foreground)] leading-[1.65]"
                                                >
                                                    <span className="num-marker text-[12px] shrink-0">
                                                        {String(bi + 1).padStart(2, '0')}
                                                    </span>
                                                    <span>{b}</span>
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

            {/* ── Projects (merged) ── */}
            <section id="projects" className="px-6 py-20 md:py-28">
                <div className="editorial-rule mb-20" />
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="md:col-span-4"
                        >
                            <p className="section-num">02</p>
                            <h2 className="serif text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
                                Selected<br /><span className="italic-serif text-[var(--accent)]">work</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="md:col-span-8"
                        >
                            <p className="text-[15px] text-[var(--muted)] leading-[1.75] max-w-2xl">
                                A selection of digital platforms, research work, and product strategy initiatives
                                I&rsquo;ve built or contributed to.
                            </p>
                        </motion.div>
                    </div>

                    {/* 2-col grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {projects.map((p, i) => (
                            <motion.a
                                key={p.title}
                                href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.04 }}
                                viewport={{ once: true }}
                                className="card card-hover p-6 group block"
                            >
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <span className="text-[11px] font-mono text-[var(--dim)] tracking-widest">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="tag">{p.category}</span>
                                </div>
                                <h3 className="serif text-[22px] font-medium text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-[13px] text-[var(--muted)] leading-[1.65] mb-5">
                                    {p.description}
                                </p>
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex flex-wrap gap-1.5">
                                        {p.tools.slice(0, 3).map((t) => (
                                            <span key={t} className="text-[10px] font-medium text-[var(--dim)]">
                                                {t}
                                            </span>
                                        )).reduce((acc: React.ReactNode[], el, idx) => {
                                            if (idx > 0) acc.push(<span key={`sep-${idx}`} className="text-[var(--dim)] mx-1.5">·</span>);
                                            acc.push(el);
                                            return acc;
                                        }, [])}
                                    </div>
                                    <span className="text-[12px] text-white font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Visit <span aria-hidden>→</span>
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
