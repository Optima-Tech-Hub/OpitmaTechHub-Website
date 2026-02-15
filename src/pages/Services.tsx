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

const Services = () => {
    const services = [
        {
            id: 'platform',
            icon: <Layout size={48} className="text-cyan-400" />,
            title: "Digital Platform Development",
            description: "Custom web applications, dashboards, and internal systems built with modern technologies.",
            features: [
                { icon: <Monitor />, text: "Responsive Web Applications" },
                { icon: <Smartphone />, text: "Mobile-First Design" },
                { icon: <Code />, text: "Custom Dashboards & Portals" },
                { icon: <Database />, text: "Backend Architecture" },
                { icon: <Layers />, text: "Microservices Design" },
                { icon: <GitBranch />, text: "API Development" },
            ],
            technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "Next.js"],
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 'ai',
            icon: <Cpu size={48} className="text-blue-500" />,
            title: "AI Integration & Automation",
            description: "Intelligent systems powered by machine learning and artificial intelligence.",
            features: [
                { icon: <Zap />, text: "Process Automation" },
                { icon: <BarChart />, text: "Predictive Analytics" },
                { icon: <Code />, text: "Machine Learning Models" },
                { icon: <Database />, text: "Data Processing Pipelines" },
                { icon: <Monitor />, text: "AI-Powered Dashboards" },
                { icon: <RefreshCw />, text: "Continuous Learning Systems" },
            ],
            technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Scikit-learn", "Hugging Face"],
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 'cloud',
            icon: <Cloud size={48} className="text-purple-500" />,
            title: "Cloud & Infrastructure",
            description: "Scalable cloud solutions with robust DevOps practices and continuous deployment.",
            features: [
                { icon: <Server />, text: "Cloud Architecture Design" },
                { icon: <Zap />, text: "Auto-Scaling Solutions" },
                { icon: <GitBranch />, text: "CI/CD Pipelines" },
                { icon: <Lock />, text: "Security Hardening" },
                { icon: <BarChart />, text: "Performance Monitoring" },
                { icon: <Database />, text: "Database Management" },
            ],
            technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 'maintenance',
            icon: <Settings size={48} className="text-emerald-400" />,
            title: "Maintenance & Support",
            description: "24/7 monitoring, updates, and continuous improvement for your digital systems.",
            features: [
                { icon: <ShieldCheck />, text: "24/7 System Monitoring" },
                { icon: <RefreshCw />, text: "Regular Updates & Patches" },
                { icon: <Lock />, text: "Security Audits" },
                { icon: <BarChart />, text: "Performance Optimization" },
                { icon: <Code />, text: "Bug Fixes & Enhancements" },
                { icon: <Monitor />, text: "Technical Support" },
            ],
            technologies: ["Grafana", "Prometheus", "New Relic", "Sentry", "PagerDuty", "Datadog"],
            color: "from-emerald-500 to-teal-600"
        }
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Analysis",
            desc: "We understand your challenges, goals, and requirements through comprehensive consultation."
        },
        {
            step: "02",
            title: "Design & Planning",
            desc: "Creating detailed technical specifications and user-centric design mockups."
        },
        {
            step: "03",
            title: "Development & Integration",
            desc: "Building your solution using agile methodologies with regular progress updates."
        },
        {
            step: "04",
            title: "Testing & Quality Assurance",
            desc: "Rigorous testing to ensure reliability, security, and performance."
        },
        {
            step: "05",
            title: "Deployment & Launch",
            desc: "Seamless deployment with minimal disruption and comprehensive training."
        },
        {
            step: "06",
            title: "Support & Growth",
            desc: "Ongoing maintenance, monitoring, and continuous improvement."
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Comprehensive digital solutions designed to transform your operations and drive sustainable growth
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
                                        <div className={`inline-block p-4 bg-gradient-to-r ${service.color} rounded-2xl mb-6`}>
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
                                            <h4 className="text-white font-semibold mb-3">Technologies We Use:</h4>
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
                                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 rounded-3xl blur-2xl`} />
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
                                                            <div className={`p-3 bg-gradient-to-r ${service.color} opacity-20 rounded-lg`}>
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
                        title="Our Process"
                        subtitle="A proven methodology for delivering exceptional results"
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
            <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        Let's discuss how our services can transform your operations
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        Contact Us Today <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
