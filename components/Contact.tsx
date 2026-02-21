'use client';

import { motion } from 'framer-motion';

const openTo = [
    { icon: '🗂️', label: 'IT Project Management' },
    { icon: '📦', label: 'Product Management' },
    { icon: '🚀', label: 'Business Development' },
    { icon: '📊', label: 'Data Analysis' },
];

export default function Contact() {
    return (
        <footer id="contact" className="px-6 pb-16 pt-8">
            <div className="divider mb-24" />
            <div className="container mx-auto max-w-5xl">

                {/* Open To section */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="section-label">Opportunities</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                        Open to Opportunities In
                    </h2>
                    <div className="flex flex-wrap gap-2.5 mb-10">
                        {openTo.map((item) => (
                            <div
                                key={item.label}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/10"
                            >
                                <span>{item.icon}</span>
                                <span className="text-sm font-semibold text-gray-300">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Block */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative glass rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-white/8 mb-16"
                >
                    <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full blur-[80px] bg-violet-600/20 pointer-events-none" />
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-[80px] bg-cyan-600/15 pointer-events-none" />

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
                        Let&apos;s Build <span className="gradient-text">Impactful Technology</span>
                        <br />and Products Together
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
                        Open for product roles, data roles, project management, tech consulting, and startup opportunities.
                        Let&apos;s create something that matters.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
                        <motion.a
                            href="mailto:ghifarryaal@gmail.com"
                            className="px-7 py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.08)] inline-flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                        >
                            ✉️ Send Email
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/isa-al-ghifary-ahmad"
                            target="_blank" rel="noopener noreferrer"
                            className="px-7 py-3.5 rounded-xl border border-white/15 hover:bg-white/8 text-white font-semibold text-sm tracking-wide transition-all inline-flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                        >
                            🔗 LinkedIn
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/file/d/1NbH-V17Dyqxls_A2w8tcA2v-3TJBy7db/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3.5 rounded-xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 font-semibold text-sm tracking-wide transition-all inline-flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                        >
                            ↓ Download CV
                        </motion.a>
                    </div>
                </motion.div>

                {/* Footer bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 items-start pt-8 border-t border-white/5"
                >
                    <div>
                        <p className="text-base font-bold text-white mb-1">Isa<span className="gradient-text">.</span></p>
                        <p className="text-xs text-gray-700 leading-relaxed">
                            IT Project & Product Manager<br />Business-Technology Professional
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] text-gray-700 font-bold uppercase tracking-widest mb-2">Contact</p>
                        <a href="mailto:ghifarryaal@gmail.com" className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
                            ✉️ ghifarryaal@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/isa-al-ghifary-ahmad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
                            🔗 LinkedIn Profile
                        </a>
                        <p className="flex items-center gap-2 text-xs text-gray-700">📍 Karawang, West Java, Indonesia</p>
                    </div>
                    <div className="md:text-right">
                        <p className="text-xs text-gray-700">© 2026 Isa Al Ghifary Ahmad</p>
                        <p className="text-xs text-gray-700 mt-1">Built with Next.js &amp; Framer Motion</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
