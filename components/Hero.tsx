'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[88vh] flex items-center justify-center px-6 pt-32 pb-20 ambient-grid">
            <div className="container mx-auto max-w-5xl z-10">
                {/* Intro line */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[13px] text-[var(--muted)] font-medium tracking-wide mb-6"
                >
                    <span className="num-marker">01 —</span>&nbsp;&nbsp;Hello, I&rsquo;m
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="serif text-5xl md:text-7xl lg:text-[88px] font-light leading-[1.02] tracking-tight text-white mb-6"
                >
                    Isa Al Ghifary
                    <br />
                    <span className="italic-serif text-[var(--accent)]">Ahmad</span>
                </motion.h1>

                {/* Role */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed mb-10"
                >
                    An <span className="text-white font-medium">IT Project & Product Manager</span> building
                    technology platforms, workflow automation, and data-driven products that help organizations
                    operate more efficiently.
                </motion.p>

                {/* Status + CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="flex flex-wrap gap-3 items-center"
                >
                    <a
                        href="/experience"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0a0a0c] text-sm font-semibold hover:bg-[var(--accent)] transition-colors"
                    >
                        View Experience
                        <span aria-hidden>→</span>
                    </a>
                    <a
                        href="/achievements"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/30 hover:bg-white/5 transition-all"
                    >
                        Achievements
                    </a>
                    <a
                        href="https://drive.google.com/file/d/18dL4-XbUq6MtVjVvDjgkrNHwcAFq64Lb/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[var(--muted)] text-sm font-medium hover:text-white transition-colors"
                    >
                        <span aria-hidden>↓</span> Download CV
                    </a>
                </motion.div>

                {/* Quick meta */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-3xl"
                >
                    {[
                        { label: 'Based in', value: 'Karawang, ID' },
                        { label: 'Focus', value: 'PM · Product · Data' },
                        { label: 'Currently', value: 'Tixchain.id' },
                        { label: 'Open to', value: 'PM, Data, Tech roles' },
                    ].map((item) => (
                        <div key={item.label}>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--dim)] mb-1.5">
                                {item.label}
                            </p>
                            <p className="text-sm text-white font-medium">{item.value}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
