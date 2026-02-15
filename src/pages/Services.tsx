import { motion } from 'framer-motion';
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
    ArrowRight
} from 'lucide-react';
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            id: 'platform',
            icon: <Layout size={48} className="text-cyan-400" />,
            title: t('servicesPage.items.platform.title'),
            description: t('servicesPage.items.platform.description'),
            features: [
                { icon: <Monitor />, text: t('servicesPage.items.platform.features.responsive') },
                { icon: <Smartphone />, text: t('servicesPage.items.platform.features.mobile') },
                { icon: <Code />, text: t('servicesPage.items.platform.features.dashboards') },
                { icon: <Database />, text: t('servicesPage.items.platform.features.backend') },
                { icon: <Layers />, text: t('servicesPage.items.platform.features.microservices') },
                { icon: <GitBranch />, text: t('servicesPage.items.platform.features.api') },
            ],
            technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "Next.js"],
            technologiesLabel: t('servicesPage.items.platform.technologies'),
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 'ai',
            icon: <Cpu size={48} className="text-blue-500" />,
            title: t('servicesPage.items.ai.title'),
            description: t('servicesPage.items.ai.description'),
            features: [
                { icon: <Zap />, text: t('servicesPage.items.ai.features.automation') },
                { icon: <BarChart />, text: t('servicesPage.items.ai.features.analytics') },
                { icon: <Code />, text: t('servicesPage.items.ai.features.ml') },
                { icon: <Database />, text: t('servicesPage.items.ai.features.data') },
                { icon: <Monitor />, text: t('servicesPage.items.ai.features.dashboards') },
                { icon: <RefreshCw />, text: t('servicesPage.items.ai.features.learning') },
            ],
            technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Scikit-learn", "Hugging Face"],
            technologiesLabel: t('servicesPage.items.platform.technologies'), // Using same label key or distinct if needed
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 'cloud',
            icon: <Cloud size={48} className="text-purple-500" />,
            title: t('servicesPage.items.cloud.title'),
            description: t('servicesPage.items.cloud.description'),
            features: [
                { icon: <Server />, text: t('servicesPage.items.cloud.features.architecture') },
                { icon: <Zap />, text: t('servicesPage.items.cloud.features.scaling') },
                { icon: <GitBranch />, text: t('servicesPage.items.cloud.features.cicd') },
                { icon: <Lock />, text: t('servicesPage.items.cloud.features.security') },
                { icon: <BarChart />, text: t('servicesPage.items.cloud.features.monitoring') },
                { icon: <Database />, text: t('servicesPage.items.cloud.features.database') },
            ],
            technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
            technologiesLabel: t('servicesPage.items.platform.technologies'),
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 'maintenance',
            icon: <Settings size={48} className="text-emerald-400" />,
            title: t('servicesPage.items.maintenance.title'),
            description: t('servicesPage.items.maintenance.description'),
            features: [
                { icon: <ShieldCheck />, text: t('servicesPage.items.maintenance.features.monitoring') },
                { icon: <RefreshCw />, text: t('servicesPage.items.maintenance.features.updates') },
                { icon: <Lock />, text: t('servicesPage.items.maintenance.features.audits') },
                { icon: <BarChart />, text: t('servicesPage.items.maintenance.features.optimization') },
                { icon: <Code />, text: t('servicesPage.items.maintenance.features.fixes') },
                { icon: <Monitor />, text: t('servicesPage.items.maintenance.features.support') },
            ],
            technologies: ["Grafana", "Prometheus", "New Relic", "Sentry", "PagerDuty", "Datadog"],
            technologiesLabel: t('servicesPage.items.platform.technologies'),
            color: "from-emerald-500 to-teal-600"
        }
    ];

    const process = [
        {
            step: "01",
            title: t('servicesPage.process.steps.discovery.title'),
            desc: t('servicesPage.process.steps.discovery.desc')
        },
        {
            step: "02",
            title: t('servicesPage.process.steps.design.title'),
            desc: t('servicesPage.process.steps.design.desc')
        },
        {
            step: "03",
            title: t('servicesPage.process.steps.development.title'),
            desc: t('servicesPage.process.steps.development.desc')
        },
        {
            step: "04",
            title: t('servicesPage.process.steps.testing.title'),
            desc: t('servicesPage.process.steps.testing.desc')
        },
        {
            step: "05",
            title: t('servicesPage.process.steps.deployment.title'),
            desc: t('servicesPage.process.steps.deployment.desc')
        },
        {
            step: "06",
            title: t('servicesPage.process.steps.support.title'),
            desc: t('servicesPage.process.steps.support.desc')
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: t('servicesPage.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('servicesPage.hero.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`scroll-mt-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                    {/* Content */}
                                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                        <div className={`inline-block p-4 bg-linear-to-r ${service.color} rounded-2xl mb-6`}>
                                            {service.icon}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                                        <p className="text-slate-400 text-lg leading-relaxed mb-8">{service.description}</p>

                                        {/* Features Grid */}
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="text-cyan-400 mt-1">
                                                        {React.cloneElement(feature.icon, { size: 20 })}
                                                    </div>
                                                    <span className="text-slate-300 text-sm">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-white font-semibold mb-3">{service.technologiesLabel}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-700"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual Card */}
                                    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-linear-to-r ${service.color} opacity-20 rounded-3xl blur-2xl`} />
                                            <div className="relative glass-effect p-8 rounded-3xl">
                                                <div className="space-y-4">
                                                    {service.features.slice(0, 3).map((feature, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: idx * 0.1 }}
                                                            className="flex items-center gap-4 p-4 bg-slate-950 rounded-xl"
                                                        >
                                                            <div className={`p-3 bg-linear-to-r ${service.color} opacity-20 rounded-lg`}>
                                                                {React.cloneElement(feature.icon, { size: 24 })}
                                                            </div>
                                                            <span className="text-white font-medium">{feature.text}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('servicesPage.process.title')}
                        subtitle={t('servicesPage.process.subtitle')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-effect p-6 rounded-xl hover:border-cyan-500/50 transition-all group"
                            >
                                <div className="text-5xl font-bold text-gradient mb-4 opacity-50">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-linear-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        {t('servicesPage.cta.title')}
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        {t('servicesPage.cta.subtitle')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        {t('servicesPage.cta.button')} <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
