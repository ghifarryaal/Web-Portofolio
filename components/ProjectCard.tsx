'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    icon: string;
    color: string;
    delay: number;
}

export default function ProjectCard({ title, description, icon, color, delay }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className={`relative group rounded-3xl overflow-hidden border border-white/5 bg-[#111] hover:border-white/20 transition-all duration-500`}
        >
            {/* Browser Window Bar */}
            <div className="flex items-center gap-2 px-5 py-4 bg-white/5 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>

            {/* Content Area */}
            <div className="p-8 relative min-h-[300px] flex flex-col justify-between">
                {/* Background Glow */}
                <div
                    className="absolute inset-0 opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
                ></div>

                <div className="relative z-10">
                    <div className="text-6xl mb-6 bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/10">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[var(--accent)] transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                        {description}
                    </p>
                </div>

                <div className="mt-8">
                    <span className="text-sm text-gray-500 font-mono tracking-wider uppercase">Featured Project</span>
                </div>
            </div>
        </motion.div>
    );
}
