'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <footer id="contact" className="px-6 pt-16 pb-10">
            <div className="editorial-rule mb-20" />
            <div className="container mx-auto max-w-5xl">
                {/* CTA Block */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20"
                >
                    <div className="md:col-span-7">
                        <p className="section-num">Get in touch</p>
                        <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05] mb-6">
                            Let&rsquo;s build<br />
                            <span className="italic-serif text-[var(--accent)]">impactful technology</span>
                            <br />
                            together.
                        </h2>
                        <p className="text-[15px] text-[var(--muted)] leading-[1.75] max-w-md mb-8">
                            Open for product, data, project management, and startup opportunities.
                            I respond within 1&ndash;2 business days.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="mailto:ghifarryaal@gmail.com"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0a0a0c] text-sm font-semibold hover:bg-[var(--accent)] transition-colors"
                            >
                                <span aria-hidden>✉</span> Send email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/isa-al-ghifary-ahmad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/30 hover:bg-white/5 transition-all"
                            >
                                LinkedIn <span aria-hidden>↗</span>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/18dL4-XbUq6MtVjVvDjgkrNHwcAFq64Lb/view?usp=share_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[var(--muted)] text-sm font-medium hover:text-white transition-colors"
                            >
                                <span aria-hidden>↓</span> Download CV
                            </a>
                        </div>
                    </div>

                    {/* Quick info */}
                    <div className="md:col-span-5 md:pt-2 space-y-8">
                        <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--dim)] mb-2">
                                Email
                            </p>
                            <a
                                href="mailto:ghifarryaal@gmail.com"
                                className="text-[15px] text-white link-editorial"
                            >
                                ghifarryaal@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--dim)] mb-2">
                                Based in
                            </p>
                            <p className="text-[15px] text-white">Karawang, West Java, Indonesia</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--dim)] mb-2">
                                Open to
                            </p>
                            <p className="text-[15px] text-white leading-relaxed">
                                IT Project Management, Product Management, Business Development, Data Analysis
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Signature + footer bar */}
                <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
                    <div>
                        <p className="serif text-2xl text-white italic mb-1">
                            <span className="italic-serif text-[var(--accent)]">Isa</span>
                        </p>
                        <p className="text-[12px] text-[var(--dim)]">
                            IT Project & Product Manager · Business-Technology Professional
                        </p>
                    </div>
                    <div className="text-left md:text-right">
                        <p className="text-[12px] text-[var(--dim)]">
                            &copy; 2026 Isa Al Ghifary Ahmad
                        </p>
                        <p className="text-[12px] text-[var(--dim)] mt-1">
                            Built with Next.js &amp; Framer Motion
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
