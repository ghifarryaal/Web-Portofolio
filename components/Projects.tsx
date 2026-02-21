'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// ── Helpers ────────────────────────────────────────────────────────────────────
// Project URLs
const URLS = {
    idx: 'https://indonesiastockanalyst.my.id/',
    tixchain: 'https://tixchain.id/',
    doku: 'https://drive.google.com/file/d/1sxffJCmll9Afkwd517D7fMGiXTar26tL/view?usp=drive_link',
    zenchain: 'https://www.ejournal.pelitaindonesia.ac.id/index.php/JOISIE/article/view/4913/1903',
    pakein: 'https://drive.google.com/drive/folders/1DJ-vUoa5Pkwi6pD_POW10pJkfe_Lywbj?usp=drive_link',
    bundaku: 'https://drive.google.com/drive/folders/1BGM3JPLx_F-M7wu2GDL8gXinj-EApycS?usp=drive_link',
};

// ── Project data ───────────────────────────────────────────────────────────────
const projects = [
    {
        number: '01',
        logo: '/Logo/Logo-idx.png',
        category: 'Business Intelligence',
        title: 'IDX Stock Analysis Platform',
        subtitle: 'Workflow-Driven Capital Market Intelligence',
        description:
            'Built a workflow-driven stock analysis platform using n8n automation, integrating structured data pipelines and analytical logic to support capital market analysis and decision-making.',
        impact: [
            'Automated end-to-end stock analysis workflow',
            'Reduced manual analysis effort significantly',
            'Built scalable, reusable decision-support system',
        ],
        tools: ['n8n', 'Data Pipelines', 'Automation', 'Web Platform'],
        accent: 'from-amber-500/10', border: 'border-amber-500/20', glow: 'bg-amber-500/15', tag: 'bg-amber-500/10 text-amber-400',
        btn: { label: 'Explore Platform', href: URLS.idx },
    },
    {
        number: '02',
        logo: '/Logo/tixchain-type-white.png',
        category: 'Web3 & Blockchain',
        title: 'Tixchain.id',
        subtitle: 'Blockchain NFT Ticketing Platform',
        description:
            'Initiated and developed a blockchain-based concert ticketing platform focused on transparency, digital ownership, and fraud prevention.',
        impact: [
            'Secured IDR 10 million project funding',
            'Built full product concept and architecture',
            'Designed business model and product strategy',
        ],
        tools: ['Blockchain', 'NFT', 'Product Strategy', 'Web3'],
        accent: 'from-cyan-500/10', border: 'border-cyan-500/20', glow: 'bg-cyan-500/15', tag: 'bg-cyan-500/10 text-cyan-400',
        btn: { label: 'Explore Tixchain', href: URLS.tixchain },
    },
    {
        number: '03',
        logo: '/Logo/ZenChain.png',
        category: 'Research & Governance',
        title: 'ZenChain Smart Contract Research',
        subtitle: 'Decentralized E-Voting Governance',
        description:
            'Developed a blockchain-based smart contract for an e-voting system and published the research in an academic journal.',
        impact: [
            'Built decentralized governance prototype',
            'Published peer-reviewed academic research',
            'Validated smart contract security & efficiency',
        ],
        tools: ['Solidity', 'Smart Contracts', 'Blockchain', 'Academic Research'],
        accent: 'from-orange-500/10', border: 'border-orange-500/20', glow: 'bg-orange-500/15', tag: 'bg-orange-500/10 text-orange-400',
        btn: { label: 'Read Publication', href: URLS.zenchain },
    },
    {
        number: '04',
        logo: '/Logo/Logo DOKU.png',
        category: 'Data Analytics',
        title: 'DOKU Wallet Data Analytics',
        subtitle: 'E-Wallet Transaction Intelligence',
        description:
            'Conducted end-to-end data analysis on e-wallet transaction data using SQL, Python, and visualization tools to generate actionable business insights.',
        impact: [
            'Identified high-performing customer segments',
            'Built interactive data dashboards',
            'Generated strategic business recommendations',
        ],
        tools: ['SQL', 'Python', 'Pandas', 'Data Visualization'],
        accent: 'from-violet-500/10', border: 'border-violet-500/20', glow: 'bg-violet-500/15', tag: 'bg-violet-500/10 text-violet-400',
        btn: { label: 'View Case Study', href: URLS.doku },
    },
    {
        number: '05',
        logo: '/Logo/BundaKU.PNG',
        category: 'HealthTech Strategy',
        title: 'BundaKu Digital Health Platform',
        subtitle: 'Telemedicine & Health Analytics',
        description:
            'Led business and product strategy development for a digital health platform integrating telemedicine, education, and analytics systems.',
        impact: [
            'Developed comprehensive business model',
            'Designed full product strategy and roadmap',
            'Created financial projections and investor pitch',
        ],
        tools: ['Product Strategy', 'Business Modeling', 'Financial Projections', 'UX Design'],
        accent: 'from-emerald-500/10', border: 'border-emerald-500/20', glow: 'bg-emerald-500/15', tag: 'bg-emerald-500/10 text-emerald-400',
        btn: { label: 'View Proposal', href: URLS.bundaku },
    },
    {
        number: '06',
        logo: '/Logo/logo pakein.png',
        category: 'Consumer AI',
        title: 'Pake.in — AI Fashion Platform',
        subtitle: 'AI-Powered Fashion Recommendation & AR',
        description:
            'Co-developed an AI-powered fashion platform integrating recommendation systems, AR technology, and business analytics for the Indonesian market.',
        impact: [
            'Designed end-to-end business model',
            'Developed full product concept and user flow',
            'Created investor pitch and financial model',
        ],
        tools: ['AI/ML', 'AR Technology', 'Business Analytics', 'Product Design'],
        accent: 'from-pink-500/10', border: 'border-pink-500/20', glow: 'bg-pink-500/15', tag: 'bg-pink-500/10 text-pink-400',
        btn: { label: 'View Proposal', href: URLS.pakein },
    },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            {/* Background decorative element */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full blur-[120px] bg-violet-600/10 pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full blur-[120px] bg-cyan-600/10 pointer-events-none" />

            <div className="divider mb-24" />
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <span className="section-label">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Featured <span className="gradient-text">Systems &amp; Products</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-4 max-w-2xl leading-relaxed">
                        A showcase of digital platforms, analytical systems, and strategic products built at the intersection of business needs and technological precision.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`glass glass-hover rounded-[2rem] p-7 border ${p.border} bg-gradient-to-br ${p.accent} to-transparent relative group flex flex-col h-full overflow-hidden`}
                        >
                            {/* Hover glow */}
                            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[70px] ${p.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            {/* Watermark number & Category */}
                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full glass border border-white/5 ${p.tag}`}>
                                    {p.category}
                                </span>
                                <span className="text-4xl font-black text-white/[0.03] select-none leading-none group-hover:text-white/[0.08] transition-colors duration-500">
                                    {p.number}
                                </span>
                            </div>

                            {/* Logo Section */}
                            <div className="mb-6 relative h-12 w-full flex items-center">
                                {p.logo ? (
                                    <div className="relative h-12 w-32 filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                                        <Image
                                            src={p.logo}
                                            alt={p.title}
                                            fill
                                            className="object-contain object-left"
                                            sizes="128px"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-2xl">
                                        🚀
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="space-y-2 mb-6">
                                <h3 className="text-lg font-extrabold text-white leading-tight tracking-tight group-hover:gradient-text transition-all duration-300">
                                    {p.title}
                                </h3>
                                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                                    {p.subtitle}
                                </p>
                            </div>

                            <p className="text-xs text-gray-400 leading-relaxed mb-6 flex-grow">
                                {p.description}
                            </p>

                            {/* Impact List */}
                            <div className="mb-8 space-y-2">
                                <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.15em] mb-4">Key Outcome</p>
                                {p.impact.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors" />
                                        <span className="text-[11px] text-gray-500 leading-relaxed font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom: Tools & Button */}
                            <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-6">
                                {/* Tools */}
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tools.map((tool) => (
                                        <span key={tool} className="text-[9px] font-bold text-gray-600 uppercase tracking-widest px-2 py-1 rounded-lg glass border border-white/5">
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <a
                                    href={p.btn.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-black text-xs font-black hover:bg-gray-100 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 group/btn"
                                >
                                    <span>{p.btn.label}</span>
                                    <svg
                                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
