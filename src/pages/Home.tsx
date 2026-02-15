import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    ArrowRight,
    Cpu,
    Code,
    Cloud,
    Settings,
    Layout,
    Zap,
    TrendingUp,
    Shield,
    Users
} from 'lucide-react';
import Logo from '../components/Logo';
import SectionHeader from '../components/SectionHeader';

const Home = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <Layout size={40} className="text-cyan-400" />,
            title: t('home.services.items.platform.title'),
            desc: t('home.services.items.platform.desc'),
            link: "/services#platform"
        },
        {
            icon: <Cpu size={40} className="text-blue-500" />,
            title: t('home.services.items.ai.title'),
            desc: t('home.services.items.ai.desc'),
            link: "/services#ai"
        },
        {
            icon: <Cloud size={40} className="text-purple-500" />,
            title: t('home.services.items.cloud.title'),
            desc: t('home.services.items.cloud.desc'),
            link: "/services#cloud"
        },
        {
            icon: <Settings size={40} className="text-emerald-400" />,
            title: t('home.services.items.maintenance.title'),
            desc: t('home.services.items.maintenance.desc'),
            link: "/services#maintenance"
        }
    ];

    const features = [
        { icon: <Shield />, title: t('home.whyChooseUs.features.inHouse.title'), desc: t('home.whyChooseUs.features.inHouse.desc') },
        { icon: <Zap />, title: t('home.whyChooseUs.features.fast.title'), desc: t('home.whyChooseUs.features.fast.desc') },
        { icon: <Code />, title: t('home.whyChooseUs.features.custom.title'), desc: t('home.whyChooseUs.features.custom.desc') },
        { icon: <Users />, title: t('home.whyChooseUs.features.communication.title'), desc: t('home.whyChooseUs.features.communication.desc') },
        { icon: <TrendingUp />, title: t('home.whyChooseUs.features.partnership.title'), desc: t('home.whyChooseUs.features.partnership.desc') },
    ];

    const stats = [
        { number: '50+', label: t('home.hero.stats.projects') },
        { number: '98%', label: t('home.hero.stats.satisfaction') },
        { number: '24/7', label: t('home.hero.stats.support') },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-950/80 to-slate-950" />

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                    {/* Animated background elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <Logo className="w-100 h-100 md:w-100 md:h-100 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-5xl"
                        dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
                    >
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        {t('home.hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                        >
                            {t('home.hero.startTransformation')}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-4 glass-effect hover:bg-slate-800 text-white font-medium rounded-lg transition-all flex items-center justify-center"
                        >
                            {t('home.hero.learnMore')}
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="grid grid-cols-3 gap-8 mt-20 max-w-3xl w-full"
                    >
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                                <div className="text-sm text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}

            </section>

            {/* Services Overview */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <SectionHeader
                        title={t('home.services.title')}
                        subtitle={t('home.services.subtitle')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="group bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all cursor-pointer"
                            >
                                <Link to={service.link} className="block">
                                    <div className="mb-6 p-4 bg-slate-900 rounded-full w-fit group-hover:bg-slate-800 transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeader title={t('home.whyChooseUs.title')} align="left" />
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                                            <p className="text-sm text-slate-400">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="lg:col-span-2">
                                <div className="grid grid-cols-2 gap-6">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="glass-effect p-6 rounded-xl"
                                    >
                                        <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                                            <div className="text-center">
                                                <Users className="text-cyan-400 mx-auto mb-2" size={48} />
                                                <p className="text-slate-400 text-sm">{t('home.whyChooseUs.cards.collaboration.label')}</p>
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">{t('home.whyChooseUs.cards.collaboration.title')}</h4>
                                        <p className="text-sm text-slate-400">{t('home.whyChooseUs.cards.collaboration.desc')}</p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="glass-effect p-6 rounded-xl"
                                    >
                                        <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-purple-500/20 to-emerald-600/20 flex items-center justify-center">
                                            <div className="text-center">
                                                <Code className="text-purple-400 mx-auto mb-2" size={48} />
                                                <p className="text-slate-400 text-sm">{t('home.whyChooseUs.cards.architecture.label')}</p>
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">{t('home.whyChooseUs.cards.architecture.title')}</h4>
                                        <p className="text-sm text-slate-400">{t('home.whyChooseUs.cards.architecture.desc')}</p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-r from-cyan-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                    >
                        {t('home.cta.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-900/80 mb-8"
                    >
                        {t('home.cta.subtitle')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-xl"
                        >
                            {t('home.cta.button')} <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
