'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
            >
                <div
                    className={`mx-auto flex items-center justify-between w-full max-w-5xl px-3 py-2.5 rounded-full border transition-all duration-300 ${scrolled
                        ? 'bg-[#0a0a0c]/85 border-white/10 backdrop-blur-md'
                        : 'bg-[#0a0a0c]/50 border-white/5 backdrop-blur-sm'
                        }`}
                >
                    {/* Brand */}
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2.5 pl-1 pr-2"
                    >
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--accent)] text-[#0a0a0c] text-[11px] font-extrabold tracking-tight">
                            IA
                        </span>
                        <span className="hidden sm:flex items-center gap-2 text-[12px] text-[var(--muted)]">
                            <span className="status-dot" />
                            <span className="font-medium">Building Tixchain.id</span>
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-1.5 text-[13px] font-medium text-[var(--muted)] rounded-full hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden ml-2 p-2 rounded-full hover:bg-white/5 transition-all"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 flex flex-col gap-1.5">
                            <span className={`block h-px bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                            <span className={`block h-px bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
                        </div>
                    </button>
                </div>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-[#0a0a0c]/95 backdrop-blur-md border border-white/10 p-3 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="px-4 py-3 text-sm font-medium text-[var(--muted)] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
