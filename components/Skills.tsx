'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const leadershipSkills = [
    'Organizational Leadership',
    'Strategic Planning',
    'IT Project Management',
    'Product Management',
    'Stakeholder Engagement',
    'Legislative Governance',
    'People Development',
];

const businessSkills = [
    'Workflow Automation (n8n)',
    'Data Analytics',
    'Blockchain & Smart Contracts',
    'Business Development',
    'System Logic Design',
    'Research & Analysis',
    'Community Empowerment',
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Skills & <span className="gradient-text">Capabilities</span>
                </motion.h2>

                <div className="space-y-10">
                    {/* Leadership Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-center mb-6 text-[#00d4ff]">
                            Leadership & Professional Skills
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {leadershipSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="glass px-5 py-2 rounded-full text-sm text-gray-200 hover:bg-[#00d4ff] hover:text-black transition-all cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Business Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-center mb-6 text-[#00d4ff]">
                            Business & Organizational Capabilities
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {businessSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="glass px-5 py-2 rounded-full text-sm text-gray-200 hover:bg-[#00d4ff] hover:text-black transition-all cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
