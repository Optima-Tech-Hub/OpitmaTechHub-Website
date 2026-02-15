import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    align = 'center'
}) => (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
            {title}
        </motion.h2>
        <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: align === 'center' ? '6rem' : '4rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`h-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full ${align === 'center' ? 'mx-auto' : ''} mb-6`}
        />
        {subtitle && (
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`text-slate-400 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

export default SectionHeader;
