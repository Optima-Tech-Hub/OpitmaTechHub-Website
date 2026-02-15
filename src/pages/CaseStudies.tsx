import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CaseStudies = () => {
    const { t } = useTranslation();

    const caseStudies = [
        {
            id: 'erp',
            technologies: ["React", "Node.js", "PostgreSQL", "TensorFlow", "AWS"],
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 'lms',
            technologies: ["Next.js", "Python", "MongoDB", "OpenAI", "Azure"],
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 'healthcare',
            technologies: ["React", "Python", "PostgreSQL", "Redis", "GCP"],
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 'ecommerce',
            technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Vercel"],
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: 'analytics',
            technologies: ["React", "Python", "TimescaleDB", "D3.js", "AWS"],
            color: "from-orange-500 to-red-600"
        },
        {
            id: 'logistics',
            technologies: ["React", "Node.js", "PostgreSQL", "IoT Sensors", "Azure"],
            color: "from-indigo-500 to-purple-600"
        }
    ];

    const stats = [
        { id: 'projects' },
        { id: 'satisfaction' },
        { id: 'industries' },
        { id: 'value' }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: t('caseStudiesPage.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('caseStudiesPage.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => {
                            const results = t(`caseStudiesPage.items.${study.id}.results`, { returnObjects: true }) as string[];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-effect rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group"
                                >
                                    {/* Header with gradient */}
                                    <div className={`h-2 bg-linear-to-r ${study.color}`} />

                                    <div className="p-8">
                                        {/* Industry tag */}
                                        <div className="inline-block px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-semibold rounded-full mb-4">
                                            {t(`caseStudiesPage.items.${study.id}.industry`)}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {t(`caseStudiesPage.items.${study.id}.title`)}
                                        </h3>
                                        <div className="text-slate-400 text-sm mb-6">{t(`caseStudiesPage.items.${study.id}.client`)}</div>

                                        {/* Challenge */}
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-2 text-sm">{t('caseStudiesPage.labels.challenge')}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{t(`caseStudiesPage.items.${study.id}.challenge`)}</p>
                                        </div>

                                        {/* Solution */}
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-2 text-sm">{t('caseStudiesPage.labels.solution')}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{t(`caseStudiesPage.items.${study.id}.solution`)}</p>
                                        </div>

                                        {/* Results */}
                                        <div className="mb-6 p-4 bg-slate-950 rounded-lg">
                                            <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                                                <TrendingUp size={16} className="text-emerald-400" />
                                                {t('caseStudiesPage.labels.results')}
                                            </h4>
                                            <ul className="space-y-2">
                                                {results.map((result, idx) => (
                                                    <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-3 text-sm">{t('caseStudiesPage.labels.technologies')}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {study.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Duration */}
                                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                                            <Clock size={16} />
                                            <span>{t('caseStudiesPage.labels.duration')} {t(`caseStudiesPage.items.${study.id}.duration`)}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center glass-effect p-6 rounded-xl"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                    {t(`caseStudiesPage.stats.${stat.id}.number`)}
                                </div>
                                <div className="text-sm text-slate-400">
                                    {t(`caseStudiesPage.stats.${stat.id}.label`)}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-linear-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        {t('caseStudiesPage.cta.title')}
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        {t('caseStudiesPage.cta.subtitle')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        {t('caseStudiesPage.cta.button')} <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
