'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Link from 'next/link';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Expertise', href: '/competencies' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBrandClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
            >
                <div
                    className={`flex items-center justify-between w-full max-w-5xl gap-0.5 px-3 py-2 rounded-2xl border transition-all duration-500 ${scrolled
                        ? 'bg-black/70 border-white/10 backdrop-blur-xl shadow-xl shadow-black/40'
                        : 'bg-white/[0.03] border-white/[0.06] backdrop-blur-md'
                        }`}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={handleBrandClick}
                        className="px-3 py-1.5 mr-1 text-sm font-extrabold text-white tracking-tight whitespace-nowrap"
                    >
                        Isa<span className="gradient-text">.</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-2.5 py-1.5 text-[12.5px] font-medium text-gray-400 rounded-xl hover:text-white hover:bg-white/8 transition-all duration-200 whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden ml-2 p-2 rounded-xl hover:bg-white/10 transition-all"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 flex flex-col gap-1">
                            <span className={`block h-0.5 bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                            <span className={`block h-0.5 bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-white/80 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/10 p-3 shadow-2xl"
                    >
                        <div className="grid grid-cols-2 gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/8 rounded-xl transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
