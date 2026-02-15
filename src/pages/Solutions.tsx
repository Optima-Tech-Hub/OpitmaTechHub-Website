import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Building2,
    GraduationCap,
    Hospital,
    ShoppingCart,
    Briefcase,
    Factory,
    ArrowRight,
    Check,
    TrendingUp,
    Zap
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

const Solutions = () => {
    const { t } = useTranslation();

    const solutions = [
        {
            id: 'enterprise',
            icon: <Building2 size={48} className="text-cyan-400" />,
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 'education',
            icon: <GraduationCap size={48} className="text-blue-500" />,
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 'healthcare',
            icon: <Hospital size={48} className="text-purple-500" />,
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 'retail',
            icon: <ShoppingCart size={48} className="text-emerald-400" />,
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: 'finance',
            icon: <Briefcase size={48} className="text-orange-400" />,
            color: "from-orange-500 to-red-600"
        },
        {
            id: 'manufacturing',
            icon: <Factory size={48} className="text-indigo-400" />,
            color: "from-indigo-500 to-purple-600"
        }
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
                            dangerouslySetInnerHTML={{ __html: t('solutionsPage.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('solutionsPage.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {solutions.map((solution, index) => {
                            const features = t(`solutionsPage.items.${solution.id}.features`, { returnObjects: true }) as string[];
                            const benefits = t(`solutionsPage.items.${solution.id}.benefits`, { returnObjects: true }) as string[];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    {/* Content */}
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        <div className={`inline-block p-4 bg-linear-to-r ${solution.color} rounded-2xl mb-6`}>
                                            {solution.icon}
                                        </div>
                                        <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                                            {t(`solutionsPage.items.${solution.id}.industry`)}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                            {t(`solutionsPage.items.${solution.id}.title`)}
                                        </h2>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                            {t(`solutionsPage.items.${solution.id}.desc`)}
                                        </p>

                                        {/* Features */}
                                        <div className="mb-8">
                                            <h4 className="text-white font-semibold mb-4">{t('solutionsPage.labels.features')}</h4>
                                            <div className="space-y-2">
                                                {features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <Check size={20} className="text-cyan-400 shrink-0" />
                                                        <span className="text-slate-300">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div className="glass-effect p-6 rounded-xl">
                                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                                <TrendingUp size={20} className="text-emerald-400" />
                                                {t('solutionsPage.labels.benefits')}
                                            </h4>
                                            <ul className="space-y-2">
                                                {benefits.map((benefit, idx) => (
                                                    <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                                                        <Zap size={16} className="text-emerald-400 mt-1 shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Visual Card */}
                                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-linear-to-r ${solution.color} opacity-20 rounded-3xl blur-3xl`} />
                                            <div className="relative glass-effect p-8 rounded-3xl">
                                                <div className={`w-full aspect-square bg-gradient-to-br ${solution.color} rounded-2xl opacity-10 flex items-center justify-center`}>
                                                    {React.cloneElement(solution.icon, { size: 120, className: 'text-white opacity-30' })}
                                                </div>
                                                <div className="mt-6 space-y-3">
                                                    {features.slice(0, 3).map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg">
                                                            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                                            <span className="text-sm text-slate-300">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-linear-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        {t('solutionsPage.cta.title')}
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        {t('solutionsPage.cta.subtitle')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        {t('solutionsPage.cta.button')} <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
