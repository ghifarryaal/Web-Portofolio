'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const roles = [
    'IT Project Manager',
    'Product Manager',
    'Business Developer',
    'Data Analyst',
];

const badges = [
    'IT Project Management',
    'Product Development',
    'Workflow Automation (n8n)',
    'Blockchain Research',
    'Data Analysis',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2600);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

            {/* ── Background blobs ── */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    className="absolute top-[-15%] left-[-8%] w-[55%] h-[55%] rounded-full blur-[150px] opacity-20"
                    style={{ background: 'radial-gradient(circle, #6d28d9 0%, transparent 70%)' }}
                    animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-[-10%] right-[-8%] w-[55%] h-[55%] rounded-full blur-[150px] opacity-15"
                    style={{ background: 'radial-gradient(circle, #0e7490 0%, transparent 70%)' }}
                    animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-[35%] left-[55%] w-[30%] h-[30%] rounded-full blur-[100px] opacity-10"
                    style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.022]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                    }}
                />
            </div>

            {/* ── Content ── */}
            <div className="container mx-auto max-w-5xl text-center z-10 pt-28 pb-16">

                {/* Status pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-[13px] font-medium text-gray-300">Open to PM, Data, and Technology Roles</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-[82px] font-extrabold mb-4 tracking-tight leading-[1.04]"
                >
                    <span className="name-shimmer">Isa Al Ghifary Ahmad</span>
                </motion.h1>

                {/* Static role line */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.85 }}
                    className="text-base md:text-lg text-gray-500 font-medium mb-5 tracking-widest uppercase"
                >
                    Technology Business Professional
                </motion.p>

                {/* Rotating subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.0 }}
                    className="flex justify-center mb-8"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl glass border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        <div className="w-52 text-left overflow-hidden" style={{ height: '1.6em' }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="block text-base font-bold gradient-text"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.15 }}
                    className="max-w-3xl mx-auto mb-3"
                >
                    <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                        I build technology-driven systems, digital products, and data solutions that help organizations{' '}
                        <span className="text-white font-medium">operate more efficiently</span>,{' '}
                        <span className="text-white font-medium">make better decisions</span>, and{' '}
                        <span className="text-white font-medium">scale effectively</span>.
                    </p>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                        I specialize in bridging business needs with technology execution through product thinking,
                        workflow automation, and data-driven strategy.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="flex flex-wrap gap-3 justify-center items-center mt-10 mb-12"
                >
                    {[
                        { label: 'View Projects', href: '#projects', style: 'bg-white text-black font-bold hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.12)]' },
                        { label: 'View Experience', href: '#experience', style: 'border border-white/15 hover:bg-white/8 text-white font-semibold backdrop-blur-md' },
                        { label: 'Download CV', href: 'https://drive.google.com/file/d/1NbH-V17Dyqxls_A2w8tcA2v-3TJBy7db/view?usp=drive_link', style: 'border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 font-semibold', external: true },
                        { label: 'Contact Me', href: '#contact', style: 'border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-semibold' },
                    ].map((btn) => (
                        <motion.a
                            key={btn.label}
                            href={btn.href}
                            target={'external' in btn ? '_blank' : undefined}
                            rel={'external' in btn ? 'noopener noreferrer' : undefined}
                            onClick={!('external' in btn) && btn.href.startsWith('#') ? (e) => {
                                e.preventDefault();
                                const el = document.querySelector(btn.href as string);
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            } : undefined}
                            className={`px-6 py-3 rounded-xl text-sm tracking-wide transition-all ${btn.style}`}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {btn.label}
                        </motion.a>
                    ))}

                </motion.div>

                {/* Skill badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-wrap justify-center gap-2"
                >
                    {badges.map((badge, i) => (
                        <motion.span
                            key={badge}
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.35, delay: 1.55 + i * 0.08 }}
                            className="glass px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-400 tracking-wide"
                        >
                            {badge}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-gray-700 uppercase tracking-widest font-medium">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
                />
            </motion.div>
        </section>
    );
}
