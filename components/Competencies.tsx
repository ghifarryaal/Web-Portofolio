'use client';

import { motion } from 'framer-motion';

const competencies = [
    { icon: '🗂️', title: 'IT Project Management', description: 'Structured planning, risk management, and on-time delivery of technology projects.', color: 'from-cyan-500/10', border: 'border-cyan-500/20', accent: 'text-cyan-400' },
    { icon: '📦', title: 'Product Management', description: 'End-to-end product lifecycle from ideation, roadmapping, to market validation.', color: 'from-violet-500/10', border: 'border-violet-500/20', accent: 'text-violet-400' },
    { icon: '🚀', title: 'Business Development', description: 'Identifying opportunities, building partnerships, and developing go-to-market strategy.', color: 'from-emerald-500/10', border: 'border-emerald-500/20', accent: 'text-emerald-400' },
    { icon: '📊', title: 'Data Analysis', description: 'Extracting insights from data using SQL, Python, and visualization tools.', color: 'from-amber-500/10', border: 'border-amber-500/20', accent: 'text-amber-400' },
    { icon: '⚙️', title: 'Workflow Automation (n8n)', description: 'Designing automated business pipelines and data workflows using n8n.', color: 'from-blue-500/10', border: 'border-blue-500/20', accent: 'text-blue-400' },
    { icon: '🏗️', title: 'Business Systems Dev.', description: 'Building scalable digital platforms and internal systems aligned to business goals.', color: 'from-rose-500/10', border: 'border-rose-500/20', accent: 'text-rose-400' },
    { icon: '🧭', title: 'Technology Strategy', description: 'Translating business objectives into technology roadmaps and execution plans.', color: 'from-indigo-500/10', border: 'border-indigo-500/20', accent: 'text-indigo-400' },
    { icon: '🤝', title: 'Stakeholder Management', description: 'Facilitating alignment across teams, leadership, and external partners.', color: 'from-pink-500/10', border: 'border-pink-500/20', accent: 'text-pink-400' },
    { icon: '⛓️', title: 'Blockchain Systems', description: 'NFT platforms, smart contracts, and decentralized governance systems.', color: 'from-orange-500/10', border: 'border-orange-500/20', accent: 'text-orange-400' },
    { icon: '🐍', title: 'SQL & Python for Data', description: 'Writing queries, building pipelines, and delivering data-driven recommendations.', color: 'from-teal-500/10', border: 'border-teal-500/20', accent: 'text-teal-400' },
];

export default function Competencies() {
    return (
        <section id="competencies" className="py-24 px-6">
            <div className="divider mb-24" />
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <span className="section-label">Skills & Tools</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Core <span className="gradient-text">Expertise</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {competencies.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: i * 0.06 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className={`glass glass-hover rounded-2xl p-5 border ${c.border} bg-gradient-to-br ${c.color} to-transparent cursor-default`}
                        >
                            <div className="text-2xl mb-3">{c.icon}</div>
                            <h3 className={`text-[13px] font-bold mb-2 leading-snug ${c.accent}`}>{c.title}</h3>
                            <p className="text-[11px] text-gray-600 leading-relaxed">{c.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
