import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    const values = [
        {
            icon: <Target size={32} className="text-cyan-400" />,
            title: t('about.values.items.innovation.title'),
            desc: t('about.values.items.innovation.desc')
        },
        {
            icon: <Users size={32} className="text-blue-500" />,
            title: t('about.values.items.client.title'),
            desc: t('about.values.items.client.desc')
        },
        {
            icon: <Award size={32} className="text-purple-500" />,
            title: t('about.values.items.excellence.title'),
            desc: t('about.values.items.excellence.desc')
        },
        {
            icon: <Globe size={32} className="text-emerald-400" />,
            title: t('about.values.items.global.title'),
            desc: t('about.values.items.global.desc')
        }
    ];

    const milestones = [
        { year: '2020', title: t('about.journey.milestones.2020.title'), desc: t('about.journey.milestones.2020.desc') },
        { year: '2021', title: t('about.journey.milestones.2021.title'), desc: t('about.journey.milestones.2021.desc') },
        { year: '2022', title: t('about.journey.milestones.2022.title'), desc: t('about.journey.milestones.2022.desc') },
        { year: '2023', title: t('about.journey.milestones.2023.title'), desc: t('about.journey.milestones.2023.desc') },
        { year: '2024', title: t('about.journey.milestones.2024.title'), desc: t('about.journey.milestones.2024.desc') },
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
                            dangerouslySetInnerHTML={{ __html: t('about.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('about.hero.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are */}
            <section id="story" className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeader title={t('about.whoWeAre.title')} align="left" />
                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                                <p dangerouslySetInnerHTML={{ __html: t('about.whoWeAre.p1') }} />
                                <p>{t('about.whoWeAre.p2')}</p>
                                <p>{t('about.whoWeAre.p3')}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl transform -rotate-3" />
                            <div className="relative glass-effect p-8 rounded-2xl">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center p-6 bg-slate-950 rounded-xl">
                                        <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                                        <div className="text-sm text-slate-400">{t('about.whoWeAre.stats.projects')}</div>
                                    </div>
                                    <div className="text-center p-6 bg-slate-950 rounded-xl">
                                        <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                                        <div className="text-sm text-slate-400">{t('about.whoWeAre.stats.satisfaction')}</div>
                                    </div>
                                    <div className="text-center p-6 bg-slate-950 rounded-xl">
                                        <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                                        <div className="text-sm text-slate-400">{t('about.whoWeAre.stats.team')}</div>
                                    </div>
                                    <div className="text-center p-6 bg-slate-950 rounded-xl">
                                        <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                                        <div className="text-sm text-slate-400">{t('about.whoWeAre.stats.support')}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-effect p-8 rounded-2xl border-l-4 border-cyan-500"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-cyan-500/10 rounded-lg">
                                    <Target className="text-cyan-400" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t('about.mission.title')}</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                {t('about.mission.description')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-effect p-8 rounded-2xl border-l-4 border-blue-500"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-lg">
                                    <Eye className="text-blue-400" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t('about.vision.title')}</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                {t('about.vision.description')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('about.values.title')}
                        subtitle={t('about.values.subtitle')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-effect p-6 rounded-xl hover:border-cyan-500/50 transition-all"
                            >
                                <div className="mb-4 p-4 bg-slate-950 rounded-full w-fit">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('about.journey.title')}
                        subtitle={t('about.journey.subtitle')}
                    />

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-600 hidden md:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        <div className={`glass-effect p-6 rounded-xl inline-block ${index % 2 === 0 ? 'md:float-right' : ''}`}>
                                            <div className="text-cyan-400 font-bold text-2xl mb-2">{milestone.year}</div>
                                            <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                                            <p className="text-slate-400 text-sm">{milestone.desc}</p>
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 relative z-10 shrink-0" />

                                    <div className="flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
