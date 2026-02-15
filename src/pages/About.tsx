import { motion } from 'framer-motion';
import { Target, Eye, Award, Search, Rocket, Zap, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    const values = [
        {
            icon: <Rocket size={32} />,
            title: t('about.values.items.innovation.title'),
            desc: t('about.values.items.innovation.desc'),
            colorClass: "text-cyan-400",
            bgClass: "bg-cyan-500/10"
        },
        {
            icon: <Heart size={32} />,
            title: t('about.values.items.client.title'),
            desc: t('about.values.items.client.desc'),
            colorClass: "text-rose-500",
            bgClass: "bg-rose-500/10"
        },
        {
            icon: <Award size={32} />,
            title: t('about.values.items.excellence.title'),
            desc: t('about.values.items.excellence.desc'),
            colorClass: "text-purple-500",
            bgClass: "bg-purple-500/10"
        },
        {
            icon: <Zap size={32} />,
            title: t('about.values.items.global.title'),
            desc: t('about.values.items.global.desc'),
            colorClass: "text-emerald-400",
            bgClass: "bg-emerald-500/10"
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
        <div className="min-h-screen pt-20 bg-slate-950">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full"
                        >
                            Our Identity
                        </motion.div>
                        <h1
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight"
                            dangerouslySetInnerHTML={{ __html: t('about.hero.title') }}
                        />
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                            {t('about.hero.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are - Storytelling Layout */}
            <section id="story" className="py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative lg:order-2"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-[3rem] blur-2xl transform -rotate-2" />
                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                                <img
                                    src="src/assets/team_collaboration_1771165764359.png"
                                    alt="Our Team in Action"
                                    className="w-full h-auto object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                                {/* Floating Stat Card */}
                                <div className="absolute bottom-8 left-8 right-8 glass-effect p-6 rounded-2xl border border-white/20">
                                    <div className="grid grid-cols-2 gap-4 divide-x divide-white/10">
                                        <div className="text-center">
                                            <div className="text-3xl font-black text-white">50+</div>
                                            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t('about.whoWeAre.stats.projects')}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-black text-cyan-400">98%</div>
                                            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t('about.whoWeAre.stats.satisfaction')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:order-1"
                        >
                            <SectionHeader title={t('about.whoWeAre.title')} align="left" />
                            <div className="space-y-8 text-slate-400 text-xl leading-relaxed">
                                <p className="text-white font-bold text-2xl" dangerouslySetInnerHTML={{ __html: t('about.whoWeAre.p1') }} />
                                <p>{t('about.whoWeAre.p2')}</p>
                                <p>{t('about.whoWeAre.p3')}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/5">
                                    <div className="text-4xl font-black text-white mb-2">15+</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('about.whoWeAre.stats.team')}</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/5">
                                    <div className="text-4xl font-black text-white mb-2">24/7</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('about.whoWeAre.stats.support')}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Impact Focused */}
            <section id="mission" className="py-32 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-cyan-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-cyan-400/10 transition-colors" />
                            <div className="relative glass-effect p-12 rounded-[2.5rem] border border-white/10 h-full flex flex-col">
                                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-10 shadow-lg shadow-cyan-500/10">
                                    <Target size={36} />
                                </div>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight">{t('about.mission.title')}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                    {t('about.mission.description')}
                                </p>
                                <div className="mt-auto pt-8 border-t border-white/5 flex items-center gap-3 text-cyan-400 font-bold">
                                    Strategic Focus <Rocket size={20} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative group h-full"
                        >
                            <div className="absolute inset-0 bg-blue-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-blue-400/10 transition-colors" />
                            <div className="relative glass-effect p-12 rounded-[2.5rem] border border-white/10 h-full flex flex-col">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-10 shadow-lg shadow-blue-500/10">
                                    <Eye size={36} />
                                </div>
                                <h3 className="text-4xl font-black text-white mb-6 tracking-tight">{t('about.vision.title')}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                    {t('about.vision.description')}
                                </p>
                                <div className="mt-auto pt-8 border-t border-white/5 flex items-center gap-3 text-blue-400 font-bold">
                                    Global Impact <Search size={20} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values - Interactive Cards */}
            <section className="py-32">
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
                                className="group relative"
                            >
                                <div className="relative glass-effect p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all h-full">
                                    <div className={`mb-8 p-5 ${value.bgClass} rounded-2xl w-fit ${value.colorClass} group-hover:scale-110 transition-transform duration-500`}>
                                        {value.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{value.title}</h4>
                                    <p className="text-slate-400 leading-relaxed font-medium">{value.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline - Elegant Journey */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.05)_0%,transparent_70%)]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <SectionHeader
                        title={t('about.journey.title')}
                        subtitle={t('about.journey.subtitle')}
                    />

                    <div className="relative mt-20">
                        <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-500 via-blue-600 to-transparent" />

                        <div className="space-y-32">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                                >
                                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-900 rounded-full border border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                        <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />
                                    </div>

                                    <div className="w-[calc(100%-4rem)] md:w-[45%] ml-16 md:ml-0">
                                        <div className="glass-effect p-10 rounded-[2.5rem] border border-white/5 group-hover:border-cyan-500/30 transition-all shadow-xl">
                                            <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-cyan-400/20 transition-colors">{milestone.year}</div>
                                            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{milestone.title}</h4>
                                            <p className="text-slate-400 text-lg leading-relaxed">{milestone.desc}</p>
                                        </div>
                                    </div>
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
