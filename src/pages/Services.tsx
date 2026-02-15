import { motion, useScroll } from 'framer-motion';
import {
    Layout,
    Cpu,
    Cloud,
    Settings,
    Code,
    Database,
    Lock,
    Zap,
    BarChart,
    Smartphone,
    Monitor,
    Layers,
    GitBranch,
    Server,
    ShieldCheck,
    RefreshCw,
    ArrowRight,
    Search,
    Rocket,
    CheckCircle2
} from 'lucide-react';
import { useRef } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === 'rtl';
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = scrollYProgress;

    const services = [
        {
            id: 'platform',
            icon: <Layout size={40} />,
            title: t('servicesPage.items.platform.title'),
            description: t('servicesPage.items.platform.description'),
            features: [
                { icon: <Monitor size={20} />, text: t('servicesPage.items.platform.features.responsive') },
                { icon: <Smartphone size={20} />, text: t('servicesPage.items.platform.features.mobile') },
                { icon: <Code size={20} />, text: t('servicesPage.items.platform.features.dashboards') },
                { icon: <Database size={20} />, text: t('servicesPage.items.platform.features.backend') },
                { icon: <Layers size={20} />, text: t('servicesPage.items.platform.features.microservices') },
                { icon: <GitBranch size={20} />, text: t('servicesPage.items.platform.features.api') },
            ],
            technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "Next.js"],
            technologiesLabel: t('servicesPage.items.platform.technologies'),
            color: "cyan",
            gradient: "from-cyan-500 to-blue-600"
        },
        {
            id: 'ai',
            icon: <Cpu size={40} />,
            title: t('servicesPage.items.ai.title'),
            description: t('servicesPage.items.ai.description'),
            features: [
                { icon: <Zap size={20} />, text: t('servicesPage.items.ai.features.automation') },
                { icon: <BarChart size={20} />, text: t('servicesPage.items.ai.features.analytics') },
                { icon: <Code size={20} />, text: t('servicesPage.items.ai.features.ml') },
                { icon: <Database size={20} />, text: t('servicesPage.items.ai.features.data') },
                { icon: <Monitor size={20} />, text: t('servicesPage.items.ai.features.dashboards') },
                { icon: <RefreshCw size={20} />, text: t('servicesPage.items.ai.features.learning') },
            ],
            technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Scikit-learn", "Hugging Face"],
            technologiesLabel: t('servicesPage.items.platform.technologies'),
            color: "blue",
            gradient: "from-blue-500 to-purple-600"
        },
        {
            id: 'cloud',
            icon: <Cloud size={40} />,
            title: t('servicesPage.items.cloud.title'),
            description: t('servicesPage.items.cloud.description'),
            features: [
                { icon: <Server size={20} />, text: t('servicesPage.items.cloud.features.architecture') },
                { icon: <Zap size={20} />, text: t('servicesPage.items.cloud.features.scaling') },
                { icon: <GitBranch size={20} />, text: t('servicesPage.items.cloud.features.cicd') },
                { icon: <Lock size={20} />, text: t('servicesPage.items.cloud.features.security') },
                { icon: <BarChart size={20} />, text: t('servicesPage.items.cloud.features.monitoring') },
                { icon: <Database size={20} />, text: t('servicesPage.items.cloud.features.database') },
            ],
            technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
            technologiesLabel: t('servicesPage.items.platform.technologies'),
            color: "purple",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            id: 'maintenance',
            icon: <Settings size={40} />,
            title: t('servicesPage.items.maintenance.title'),
            description: t('servicesPage.items.maintenance.description'),
            features: [
                { icon: <ShieldCheck size={20} />, text: t('servicesPage.items.maintenance.features.monitoring') },
                { icon: <RefreshCw size={20} />, text: t('servicesPage.items.maintenance.features.updates') },
                { icon: <Lock size={20} />, text: t('servicesPage.items.maintenance.features.audits') },
                { icon: <BarChart size={20} />, text: t('servicesPage.items.maintenance.features.optimization') },
                { icon: <Code size={20} />, text: t('servicesPage.items.maintenance.features.fixes') },
                { icon: <Monitor size={20} />, text: t('servicesPage.items.maintenance.features.support') },
            ],
            technologies: ["Grafana", "Prometheus", "New Relic", "Sentry", "PagerDuty", "Datadog"],
            technologiesLabel: t('servicesPage.items.platform.technologies'),
            color: "emerald",
            gradient: "from-emerald-500 to-teal-600"
        }
    ];

    const process = [
        {
            step: "01",
            title: t('servicesPage.process.steps.discovery.title'),
            desc: t('servicesPage.process.steps.discovery.desc'),
            icon: <Search size={24} />
        },
        {
            step: "02",
            title: t('servicesPage.process.steps.design.title'),
            desc: t('servicesPage.process.steps.design.desc'),
            icon: <Layout size={24} />
        },
        {
            step: "03",
            title: t('servicesPage.process.steps.development.title'),
            desc: t('servicesPage.process.steps.development.desc'),
            icon: <Code size={24} />
        },
        {
            step: "04",
            title: t('servicesPage.process.steps.testing.title'),
            desc: t('servicesPage.process.steps.testing.desc'),
            icon: <ShieldCheck size={24} />
        },
        {
            step: "05",
            title: t('servicesPage.process.steps.deployment.title'),
            desc: t('servicesPage.process.steps.deployment.desc'),
            icon: <Rocket size={24} />
        },
        {
            step: "06",
            title: t('servicesPage.process.steps.support.title'),
            desc: t('servicesPage.process.steps.support.desc'),
            icon: <Settings size={24} />
        }
    ];

    return (
        <div className="min-h-screen pt-20 bg-slate-950" ref={containerRef}>
            {/* Scroll Progress Bar */}
            <motion.div
                className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 z-[100] ${isRtl ? 'origin-right' : 'origin-left'}`}
                style={{ scaleX }}
            />
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />

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
                            Professional Solutions
                        </motion.div>
                        <h1
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight"
                            dangerouslySetInnerHTML={{ __html: t('servicesPage.hero.title') }}
                        />
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                            {t('servicesPage.hero.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detail - Alternating Sections */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-48">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`scroll-mt-32 group`}
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                    {/* Content */}
                                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                        <div className={`w-20 h-20 bg-${service.color}-500/10 rounded-3xl flex items-center justify-center text-${service.color}-400 mb-8 border border-${service.color}-500/20 shadow-xl shadow-${service.color}-500/5 group-hover:scale-110 transition-transform duration-500`}>
                                            {service.icon}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{service.title}</h2>
                                        <p className="text-slate-400 text-xl leading-relaxed mb-10">{service.description}</p>

                                        {/* Features Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-4 group/item">
                                                    <div className={`p-2 bg-slate-900 rounded-lg text-${service.color}-400 border border-white/5 group-hover/item:text-white group-hover/item:bg-${service.color}-500 transition-all`}>
                                                        {feature.icon}
                                                    </div>
                                                    <span className="text-slate-300 font-medium">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="pt-8 border-t border-white/5">
                                            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs opacity-50">{service.technologiesLabel}</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {service.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-4 py-1.5 bg-slate-900 text-cyan-400 text-sm font-bold rounded-xl border border-white/5 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all cursor-default"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual Representation */}
                                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <div className={`absolute -inset-4 bg-gradient-to-tr from-${service.color}-500/20 to-transparent rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000`} />
                                        <div className="relative glass-effect p-12 rounded-[3.5rem] border border-white/10 overflow-hidden shadow-2xl">
                                            {/* Decorative Background Image Overlay */}
                                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
                                                <img
                                                    src="src/assets/cloud_architecture.png"
                                                    alt=""
                                                    className="w-full h-full object-cover grayscale scale-150"
                                                />
                                            </div>

                                            <div className="relative space-y-6">
                                                <div className="flex items-center gap-4 mb-8">
                                                    <div className={`w-3 h-3 rounded-full bg-${service.color}-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]`} />
                                                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                                                </div>

                                                {service.features.slice(0, 4).map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="p-6 bg-slate-950/60 backdrop-blur-xl rounded-2xl border border-white/5 flex items-center gap-5 group/box hover:border-white/20 transition-all"
                                                    >
                                                        <div className={`p-4 bg-${service.color}-500/10 rounded-xl text-${service.color}-400 group-hover/box:scale-110 transition-transform`}>
                                                            {feature.icon}
                                                        </div>
                                                        <div>
                                                            <div className="text-white font-bold text-lg">{feature.text}</div>
                                                            <div className="text-slate-500 text-xs uppercase tracking-tighter mt-1">Verified Protocol</div>
                                                        </div>
                                                        <CheckCircle2 className={`ml-auto text-${service.color}-500/50`} size={20} />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process - More Dynamic Steps */}
            <section className="py-32 relative bg-slate-900/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('servicesPage.process.title')}
                        subtitle={t('servicesPage.process.subtitle')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-full"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-cyan-500/5 transition-all duration-500 rounded-[2rem]" />
                                <div className="relative glass-effect p-10 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-cyan-400 border border-white/5 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-500">
                                            {item.icon}
                                        </div>
                                        <div className="text-4xl font-black text-white/10 group-hover:text-cyan-400/20 transition-colors">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Enhanced Visuals */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="src/assets/hero_tech_visualization_1771165748665.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/80 to-cyan-900/40" />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            {t('servicesPage.cta.title')}
                        </h2>
                        <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                            {t('servicesPage.cta.subtitle')}
                        </p>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-lg rounded-2xl transition-all hover:scale-105 shadow-xl shadow-cyan-500/25"
                        >
                            {t('servicesPage.cta.button')}
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
