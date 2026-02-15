import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'center' | 'left' | 'right';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    align = 'center'
}) => {
    const alignmentClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
    const marginClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto mr-0' : 'mr-auto ml-0';

    return (
        <div className={`mb-16 ${alignmentClass}`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: align === 'center' ? '6rem' : '4rem' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`h-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full ${marginClass} mb-6`}
            />
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={`text-slate-400 text-lg max-w-2xl font-medium ${align === 'center' ? 'mx-auto' : ''}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeader;
