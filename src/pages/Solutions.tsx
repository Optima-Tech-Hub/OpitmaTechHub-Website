import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Building2,
    GraduationCap,
    Hospital,
    ShoppingCart,
    Briefcase,
    Factory,
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Zap,
    Target,
    Activity,
    Cpu,
    Shield,
    Globe,
    BarChart3
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

// Import assets
import enterpriseImg from '../assets/enterprise_solution_tech_1771190922855.png';
import educationImg from '../assets/education_solution_tech_1771190940237.png';
import healthcareImg from '../assets/healthcare_solution_tech_1771190959453.png';
import retailImg from '../assets/retail_solution_tech_v2_1771190981713.png';
import financeImg from '../assets/finance_solution_tech_v2_1771190997106.png';
import manufacturingImg from '../assets/manufacturing_solution_tech_v2_1771191019354.png';

const Solutions = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = scrollYProgress;

    const solutions = [
        {
            id: 'enterprise',
            icon: <Building2 size={40} />,
            color: "cyan",
            gradient: "from-cyan-500 to-blue-600",
            visualIcon: <Globe size={48} />,
            image: enterpriseImg
        },
        {
            id: 'education',
            icon: <GraduationCap size={40} />,
            color: "blue",
            gradient: "from-blue-500 to-purple-600",
            visualIcon: <Target size={48} />,
            image: educationImg
        },
        {
            id: 'healthcare',
            icon: <Hospital size={40} />,
            color: "purple",
            gradient: "from-purple-500 to-pink-600",
            visualIcon: <Activity size={48} />,
            image: healthcareImg
        },
        {
            id: 'retail',
            icon: <ShoppingCart size={40} />,
            color: "emerald",
            gradient: "from-emerald-500 to-teal-600",
            visualIcon: <BarChart3 size={48} />,
            image: retailImg
        },
        {
            id: 'finance',
            icon: <Briefcase size={40} />,
            color: "orange",
            gradient: "from-orange-500 to-red-600",
            visualIcon: <Shield size={48} />,
            image: financeImg
        },
        {
            id: 'manufacturing',
            icon: <Factory size={40} />,
            color: "indigo",
            gradient: "from-indigo-500 to-purple-600",
            visualIcon: <Cpu size={48} />,
            image: manufacturingImg
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950" ref={containerRef}>
            {/* Scroll Progress Bar */}
            <motion.div
                className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 z-[100] ${isRtl ? 'origin-right' : 'origin-left'}`}
                style={{ scaleX }}
            />

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full"
                        >
                            {t('solutionsPage.hero.badge')}
                        </motion.div>
                        <h1
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight"
                            dangerouslySetInnerHTML={{ __html: t('solutionsPage.hero.title') }}
                        />
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                            {t('solutionsPage.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Sections */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-48">
                        {solutions.map((solution, index) => {
                            const features = t(`solutionsPage.items.${solution.id}.features`, { returnObjects: true }) as string[];
                            const benefits = t(`solutionsPage.items.${solution.id}.benefits`, { returnObjects: true }) as string[];

                            return (
                                <motion.div
                                    key={solution.id}
                                    id={solution.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="scroll-mt-32 group"
                                >
                                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                        {/* Content Area */}
                                        <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                            <div className={`w-20 h-20 bg-${solution.color}-500/10 rounded-3xl flex items-center justify-center text-${solution.color}-400 mb-8 border border-${solution.color}-500/20 shadow-xl shadow-${solution.color}-500/5 group-hover:scale-110 transition-transform duration-500`}>
                                                {solution.icon}
                                            </div>
                                            <div className={`text-sm font-bold text-${solution.color}-400 uppercase tracking-[0.2em] mb-3`}>
                                                {t(`solutionsPage.items.${solution.id}.industry`)}
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                                                {t(`solutionsPage.items.${solution.id}.title`)}
                                            </h2>
                                            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
                                                {t(`solutionsPage.items.${solution.id}.desc`)}
                                            </p>

                                            {/* Features List */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                                {features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 group/item">
                                                        <CheckCircle2 size={18} className={`text-${solution.color}-500 shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity`} />
                                                        <span className="text-slate-300 font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Impact & Benefits */}
                                            <div className="relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 overflow-hidden">
                                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${solution.color}-500/5 rounded-full blur-3xl`} />
                                                <h4 className="text-white font-bold mb-6 flex items-center gap-3 uppercase tracking-widest text-xs opacity-50">
                                                    <TrendingUp size={16} className={`text-${solution.color}-400`} />
                                                    {t('solutionsPage.labels.benefits')}
                                                </h4>
                                                <div className="space-y-4">
                                                    {benefits.map((benefit, idx) => (
                                                        <div key={idx} className="flex items-start gap-4">
                                                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${solution.color}-400 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.5)]`} />
                                                            <span className="text-slate-400 text-base leading-relaxed">{benefit}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visual Experience */}
                                        <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                            <div className={`absolute -inset-10 bg-gradient-to-tr from-${solution.color}-500/20 to-transparent rounded-[3rem] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                                            <div className="relative glass-effect p-1 bg-slate-800/20 rounded-[3.5rem] border border-white/10 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
                                                <div className="relative aspect-[4/5] bg-slate-950 rounded-[3.25rem] overflow-hidden flex flex-col items-center justify-center p-12 overflow-hidden">
                                                    {/* Background Texture */}
                                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                                                        <img
                                                            src={solution.image}
                                                            alt=""
                                                            className="w-full h-full object-cover mix-blend-overlay"
                                                        />
                                                    </div>
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

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-20 rounded-[3rem]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-cyan-900/40" />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            {t('solutionsPage.cta.title')}
                        </h2>
                        <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            {t('solutionsPage.cta.subtitle')}
                        </p>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-lg rounded-2xl transition-all hover:scale-105 shadow-xl shadow-cyan-500/25"
                        >
                            {t('solutionsPage.cta.button')}
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
