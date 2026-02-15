import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
                    >
                        Building <span className="text-gradient">Intelligent</span>
                        <br />
                        Digital Platforms
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
                    >
                        Optima Tech Hub helps institutions transform operations through powerful software solutions integrated with artificial intelligence.
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
                            Start Transformation
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-4 glass-effect hover:bg-slate-800 text-white font-medium rounded-lg transition-all flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="grid grid-cols-3 gap-8 mt-20 max-w-3xl w-full"
                    >
                        {[
                            { number: '50+', label: 'Projects Delivered' },
                            { number: '98%', label: 'Client Satisfaction' },
                            { number: '24/7', label: 'Support Available' },
                        ].map((stat, idx) => (
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
                        title="What We Do"
                        subtitle="Comprehensive digital solutions engineered for impact"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Layout size={40} className="text-cyan-400" />,
                                title: "Digital Platform Dev",
                                desc: "Web & internal systems, custom dashboards, portals, and scalable backend architectures.",
                                link: "/services#platform"
                            },
                            {
                                icon: <Cpu size={40} className="text-blue-500" />,
                                title: "AI Integration",
                                desc: "Intelligent automation, data-driven decision systems, and AI-powered workflows.",
                                link: "/services#ai"
                            },
                            {
                                icon: <Cloud size={40} className="text-purple-500" />,
                                title: "Cloud & Infrastructure",
                                desc: "Hosting, deployment, DevOps pipelines, and continuous performance optimization.",
                                link: "/services#cloud"
                            },
                            {
                                icon: <Settings size={40} className="text-emerald-400" />,
                                title: "Maintenance & Support",
                                desc: "Continuous monitoring, system updates, and long-term technical partnership.",
                                link: "/services#maintenance"
                            }
                        ].map((service, index) => (
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
                            <SectionHeader title="Why Choose Us" align="left" />
                            <div className="space-y-6">
                                {[
                                    { icon: <Shield />, title: "Fully In-House", desc: "We control every layer. No outsourcing, no compromises." },
                                    { icon: <Zap />, title: "Fast Implementation", desc: "Agile processes ensure rapid delivery and easy iteration." },
                                    { icon: <Code />, title: "Custom Solutions", desc: "No templates. Every system is designed around your goals." },
                                    { icon: <Users />, title: "Direct Communication", desc: "Work directly with the people building your product." },
                                    { icon: <TrendingUp />, title: "Long-term Partnership", desc: "We don't just deliver — we stay and grow with you." },
                                ].map((feature, index) => (
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
                                                <p className="text-slate-400 text-sm">Team Collaboration</p>
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Collaborative Approach</h4>
                                        <p className="text-sm text-slate-400">We work closely with your team</p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="glass-effect p-6 rounded-xl"
                                    >
                                        <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-purple-500/20 to-emerald-600/20 flex items-center justify-center">
                                            <div className="text-center">
                                                <Code className="text-purple-400 mx-auto mb-2" size={48} />
                                                <p className="text-slate-400 text-sm">Clean Code</p>
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">Robust Architecture</h4>
                                        <p className="text-sm text-slate-400">Built for scalability and performance</p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                    >
                        Ready to Transform Your Operations?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-900/80 mb-8"
                    >
                        Let's build intelligent digital solutions that drive your success forward
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
                            Get Started Today <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
