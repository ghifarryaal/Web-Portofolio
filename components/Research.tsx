'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Research() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="research" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Research & <span className="gradient-text">Thought Leadership</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass rounded-2xl p-8 hover:border-[#00d4ff] transition-all duration-300"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                        Academic & Applied Research
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        Conducted applied research in information systems with a focus on blockchain and smart contract implementation. Published academic work exploring technology driven governance and secure digital systems, reflecting a strong interest in structured, future oriented solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
