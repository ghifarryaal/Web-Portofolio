'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
    'IT Project Management',
    'Product Development',
    'Workflow Automation (n8n)',
    'Blockchain & Web3',
    'Data Analysis (SQL, Python)',
    'Stakeholder & Team Leadership',
];

const facts = [
    { value: '50+', label: 'Members led across organizations' },
    { value: '4+', label: 'Organizations coordinated' },
    { value: '8+', label: 'Digital products & platforms built' },
];

export default function HomeAbout() {
    return (
        <section id="about" className="px-6 py-20 md:py-28">
            <div className="editorial-rule mb-20" />
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-12 gap-10 md:gap-16">
                    {/* Section label + heading */}
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="section-num">03</p>
                            <h2 className="serif text-3xl md:text-4xl font-light text-white tracking-tight leading-tight mb-6">
                                About <span className="italic-serif text-[var(--accent)]">me</span>
                            </h2>
                        </motion.div>

                        {/* Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/Logo/Foto Isa.webp"
                                alt="Isa Al Ghifary Ahmad"
                                fill
                                className="object-cover object-top scale-[1.3]"
                                sizes="(max-width: 768px) 128px, 160px"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 space-y-5"
                    >
                        <p className="text-[17px] md:text-[18px] text-white font-medium leading-[1.7]">
                            I&rsquo;m a technology professional exploring the intersection of business and IT.
                        </p>
                        <p className="text-[15px] text-[var(--muted)] leading-[1.75]">
                            My work centers on building digital platforms, managing structured workflows, and
                            aligning business objectives with technology execution. I&rsquo;ve led cross-functional
                            teams, developed blockchain and data-driven platforms, and managed large-scale
                            programs involving over 50 members and stakeholders.
                        </p>
                        <p className="text-[15px] text-[var(--muted)] leading-[1.75]">
                            My approach combines strategic thinking, structured execution, stakeholder
                            alignment, and outcome-focused leadership — delivering solutions that are both
                            technically sound and business-relevant.
                        </p>

                        {/* Skills — text tags */}
                        <div className="pt-6">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--dim)] mb-3">
                                What I work with
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill} className="tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Facts */}
                        <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/8">
                            {facts.map((f) => (
                                <div key={f.label}>
                                    <p className="serif text-3xl md:text-4xl text-white font-light mb-1">{f.value}</p>
                                    <p className="text-[12px] text-[var(--muted)] leading-snug">{f.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
