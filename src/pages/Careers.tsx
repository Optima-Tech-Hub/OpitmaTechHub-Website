import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Users, Zap, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';

const Careers = () => {
    const { t } = useTranslation();

    const openPositions = [
        {
            id: 'fullstack',
            skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 'aiml',
            skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 'designer',
            skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"],
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 'devops',
            skills: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD", "Terraform"],
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: 'product',
            skills: ["Product Strategy", "Agile", "Stakeholder Management", "Analytics", "Technical Understanding"],
            color: "from-orange-500 to-red-600"
        },
        {
            id: 'junior',
            skills: ["JavaScript", "React", "Basic Backend", "Git", "Willingness to Learn"],
            color: "from-indigo-500 to-purple-600"
        }
    ];

    const benefitIcons = [
        <DollarSign className="text-cyan-400" size={32} />,
        <Heart className="text-pink-400" size={32} />,
        <Users className="text-purple-400" size={32} />,
        <TrendingUp className="text-emerald-400" size={32} />,
        <Zap className="text-yellow-400" size={32} />,
        <Clock className="text-blue-400" size={32} />
    ];

    const translatedBenefits = t('careersPage.whyJoin.benefits', { returnObjects: true }) as any[];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: t('careersPage.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('careersPage.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('careersPage.whyJoin.title')}
                        subtitle={t('careersPage.whyJoin.subtitle')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {translatedBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-effect p-6 rounded-xl"
                            >
                                <div className="mb-4 p-4 bg-slate-950 rounded-full w-fit">
                                    {benefitIcons[index]}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('careersPage.openPositions.title')}
                        subtitle={t('careersPage.openPositions.subtitle')}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {openPositions.map((position, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-effect rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all group flex flex-col h-full"
                            >
                                <div className={`h-2 bg-linear-to-r ${position.color}`} />

                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Header Content */}
                                    <div className="flex-grow">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                    {t(`careersPage.openPositions.items.${position.id}.title`)}
                                                </h3>
                                                <div className="text-cyan-400 text-sm font-medium">
                                                    {t(`careersPage.openPositions.items.${position.id}.department`)}
                                                </div>
                                            </div>
                                            <div className="p-3 bg-slate-950 rounded-lg shrink-0">
                                                <Briefcase className="text-cyan-400" size={24} />
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                {t(`careersPage.openPositions.items.${position.id}.location`)}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} />
                                                {t(`careersPage.openPositions.items.${position.id}.type`)}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <TrendingUp size={16} />
                                                {t(`careersPage.openPositions.items.${position.id}.experience`)}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                            {t(`careersPage.openPositions.items.${position.id}.description`)}
                                        </p>

                                        {/* Skills */}
                                        <div className="mb-8">
                                            <h4 className="text-white font-semibold mb-3 text-sm">
                                                {t('careersPage.openPositions.labels.requiredSkills')}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {position.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-slate-900 text-slate-300 text-xs rounded-full border border-slate-800"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apply Button - Always at bottom */}
                                    <button className="w-full mt-auto px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                                        {t('careersPage.openPositions.labels.applyNow')} <ArrowRight size={18} />
                                    </button>
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
                        {t('careersPage.cta.title')}
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        {t('careersPage.cta.subtitle')}
                    </p>
                    <a
                        href="mailto:careers@optimatech.hub"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        {t('careersPage.cta.button')}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Careers;
