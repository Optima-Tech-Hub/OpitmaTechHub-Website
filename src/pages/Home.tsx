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
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';

    const services = [
        {
            icon: <Layout size={40} />,
            title: t('home.services.items.platform.title'),
            desc: t('home.services.items.platform.desc'),
            link: "/services#platform",
            color: "cyan"
        },
        {
            icon: <Cpu size={40} />,
            title: t('home.services.items.ai.title'),
            desc: t('home.services.items.ai.desc'),
            link: "/services#ai",
            color: "blue"
        },
        {
            icon: <Cloud size={40} />,
            title: t('home.services.items.cloud.title'),
            desc: t('home.services.items.cloud.desc'),
            link: "/services#cloud",
            color: "purple"
        },
        {
            icon: <Settings size={40} />,
            title: t('home.services.items.maintenance.title'),
            desc: t('home.services.items.maintenance.desc'),
            link: "/services#maintenance",
            color: "emerald"
        }
    ];

    const features = [
        { icon: <Shield size={24} />, title: t('home.whyChooseUs.features.inHouse.title'), desc: t('home.whyChooseUs.features.inHouse.desc') },
        { icon: <Zap size={24} />, title: t('home.whyChooseUs.features.fast.title'), desc: t('home.whyChooseUs.features.fast.desc') },
        { icon: <Code size={24} />, title: t('home.whyChooseUs.features.custom.title'), desc: t('home.whyChooseUs.features.custom.desc') },
        { icon: <Users size={24} />, title: t('home.whyChooseUs.features.communication.title'), desc: t('home.whyChooseUs.features.communication.desc') },
        { icon: <TrendingUp size={24} />, title: t('home.whyChooseUs.features.partnership.title'), desc: t('home.whyChooseUs.features.partnership.desc') },
    ];

    const stats = [
        { number: '50+', label: t('home.hero.stats.projects'), color: "text-cyan-400" },
        { number: '98%', label: t('home.hero.stats.satisfaction'), color: "text-blue-500" },
        { number: '24/7', label: t('home.hero.stats.support'), color: "text-purple-500" },
    ];

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Advanced Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0)_0%,_rgba(2,6,23,1)_80%)]" />

                    {/* Enhanced Grid */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />

                    {/* Floating Orbs */}
                    <motion.div
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, 0],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            y: [0, 40, 0],
                            x: [0, -20, 0],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
                        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="mb-12"
                    >
                        <Logo className="w-48 h-48 md:w-64 md:h-64 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform duration-500 cursor-pointer" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-bold mb-8 uppercase tracking-widest"
                    >
                        <Zap size={14} />
                        Next-Gen Digital Systems
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 max-w-5xl leading-[1.1]"
                        dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium"
                    >
                        {t('home.hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 mb-20"
                    >
                        <Link
                            to="/contact"
                            className="group relative px-10 py-5 bg-cyan-500 text-slate-950 font-black rounded-2xl transition-all overflow-hidden shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                {t('home.hero.startTransformation')}
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            to="/about"
                            className="px-10 py-5 glass-effect text-white font-bold rounded-2xl transition-all hover:bg-slate-900 border border-white/10 hover:border-white/20 flex items-center justify-center hover:scale-105"
                        >
                            {t('home.hero.learnMore')}
                        </Link>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl w-full pt-12 border-t border-white/5"
                    >
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className={`text-5xl font-black mb-2 ${stat.color} tracking-tight`}>{stat.number}</div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
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
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <Link to={service.link} className="relative block h-full glass-effect rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all">
                                    <div className={`mb-8 p-5 bg-slate-900 rounded-2xl w-fit text-${service.color}-400 group-hover:scale-110 transition-transform duration-500 border border-white/5`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                                        {service.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-cyan-400 font-bold group/btn mt-auto">
                                        Explore
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeader title={t('home.whyChooseUs.title')} align={isRtl ? "right" : "left"} />
                            <div className="space-y-8 mt-12">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className="p-4 bg-slate-900 rounded-2xl text-cyan-400 border border-white/5 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-white mb-2 tracking-tight">{feature.title}</h4>
                                            <p className="text-slate-400 leading-relaxed font-medium">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-2 rounded-[3.5rem] "
                        >

                            <div className="grid grid-cols-1 gap-6">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="glass-effect p-8 rounded-[3rem]  border-white/10 group"
                                >
                                    <div className="relative h-48 rounded-[2rem] overflow-hidden mb-8 bg-slate-950 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                                        <div className="text-center relative z-10">
                                            <Users className="text-cyan-400 mx-auto mb-4" size={56} />
                                            <p className="text-cyan-400/50 text-xs font-black uppercase tracking-[0.2em]">{t('home.whyChooseUs.cards.collaboration.label')}</p>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{t('home.whyChooseUs.cards.collaboration.title')}</h4>
                                    <p className="text-slate-400 leading-relaxed font-medium">{t('home.whyChooseUs.cards.collaboration.desc')}</p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="glass-effect p-8 rounded-[3rem] border border-white/10 group"
                                >
                                    <div className="relative h-48 rounded-[2rem] overflow-hidden mb-8 bg-slate-950 border border-white/5 flex items-center justify-center group-hover:border-purple-500/30 transition-colors">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
                                        <div className="text-center relative z-10">
                                            <Code className="text-purple-400 mx-auto mb-4" size={56} />
                                            <p className="text-purple-400/50 text-xs font-black uppercase tracking-[0.2em]">{t('home.whyChooseUs.cards.architecture.label')}</p>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{t('home.whyChooseUs.cards.architecture.title')}</h4>
                                    <p className="text-slate-400 leading-relaxed font-medium">{t('home.whyChooseUs.cards.architecture.desc')}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-20 rounded-[3rem]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-800" />
                    <img
                        src="/assets/hero_tech_visualization_1771165748665.png"
                        alt=""
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter"
                    >
                        {t('home.cta.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium"
                    >
                        {t('home.cta.subtitle')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-12 py-5 bg-white text-slate-950 font-black text-xl rounded-2xl transition-all transform hover:scale-105 shadow-2xl shadow-black/20"
                        >
                            {t('home.cta.button')} <ArrowRight size={24} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
