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
        <section id="summary" className="px-6 py-20 md:py-28">
            <div className="editorial-rule mb-20" />
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-12 gap-10 md:gap-16">
                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-4"
                    >
                        <p className="section-num">02</p>
                        <h2 className="serif text-3xl md:text-4xl font-light text-white tracking-tight leading-tight">
                            Professional<br /><span className="italic-serif text-[var(--accent)]">summary</span>
                        </h2>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 space-y-5"
                    >
                        <p className="text-[17px] md:text-[18px] text-[var(--foreground)] leading-[1.7]">
                            I&rsquo;m a technology-focused business professional with a track record of building{' '}
                            <span className="text-white font-medium">digital platforms</span>, developing{' '}
                            <span className="text-white font-medium">workflow automation systems</span>, and
                            leading strategic initiatives across technology and organizational environments.
                        </p>
                        <p className="text-[15px] text-[var(--muted)] leading-[1.7]">
                            I combine business thinking, product execution, and data analysis to deliver
                            meaningful, measurable impact — translating complex requirements into systems
                            that work.
                        </p>

                        {/* Capability list — minimal */}
                        <ul className="pt-4 space-y-3">
                            {capabilities.map((cap, i) => (
                                <motion.li
                                    key={cap}
                                    initial={{ opacity: 0, x: -8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-baseline gap-4 text-[15px] text-[var(--foreground)]"
                                >
                                    <span className="num-marker text-sm shrink-0">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span>{cap}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
