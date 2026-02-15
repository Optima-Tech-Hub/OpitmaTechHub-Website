import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const About = () => {
    const values = [
        {
            icon: <Target size={32} className="text-cyan-400" />,
            title: "Innovation First",
            desc: "We leverage cutting-edge technology to solve real-world problems"
        },
        {
            icon: <Users size={32} className="text-blue-500" />,
            title: "Client-Centric",
            desc: "Your success is our mission. We build solutions tailored to your needs"
        },
        {
            icon: <Award size={32} className="text-purple-500" />,
            title: "Excellence",
            desc: "We deliver premium quality in every line of code and every interaction"
        },
        {
            icon: <Globe size={32} className="text-emerald-400" />,
            title: "Global Impact",
            desc: "Building solutions that scale and make a difference worldwide"
        }
    ];

    const milestones = [
        { year: '2020', title: 'Company Founded', desc: 'Started with a vision to transform digital operations' },
        { year: '2021', title: 'First Major Client', desc: 'Delivered comprehensive platform for enterprise institution' },
        { year: '2022', title: 'AI Integration', desc: 'Launched AI-powered solutions and automation services' },
        { year: '2023', title: '50+ Projects', desc: 'Reached milestone of 50+ successful project deliveries' },
        { year: '2024', title: 'Global Expansion', desc: 'Extended operations to serve international clients' },
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            About <span className="text-gradient">Optima Tech Hub</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            We are a technology-driven company specializing in digital platform development and AI integration,
                            helping institutions transform their operations through intelligent software solutions.
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
                            <SectionHeader title="Who We Are" align="left" />
                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                                <p>
                                    <strong className="text-cyan-400">Optima Tech Hub</strong> is a technology-driven company specializing in digital platform development and AI integration.
                                </p>
                                <p>
                                    We design, build, and maintain intelligent systems that help organizations operate smarter, faster, and more efficiently. From initial setup to long-term maintenance, we deliver end-to-end solutions tailored to each institution's needs.
                                </p>
                                <p>
                                    Our team of expert developers, AI specialists, and infrastructure engineers work together to create seamless digital experiences that drive real business value.
                                </p>
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
                                        <div className="text-sm text-slate-400">Projects Completed</div>
                                    </div>
                                    <div className="text-center p-6 bg-slate-950 rounded-xl">
                                        <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                                        <div className="text-sm text-slate-400">Client Satisfaction</div>
                                    </div>
                                    <div className="text-center p-6 bg-slate-950 rounded-xl">
                                        <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                                        <div className="text-sm text-slate-400">Team Members</div>
                                    </div>
                                    <div className="text-center p-6 bg-slate-950 rounded-xl">
                                        <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                                        <div className="text-sm text-slate-400">Support Available</div>
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
                                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                To empower institutions with intelligent digital systems that simplify operations and unlock sustainable growth.
                                We strive to deliver solutions that are not just functional, but transformative.
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
                                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                                To be the leading partner for institutions seeking intelligent digital transformation.
                                We envision a future where every organization operates at peak efficiency through smart technology.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Our Core Values"
                        subtitle="The principles that guide everything we do"
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
                        title="Our Journey"
                        subtitle="Key milestones in our growth story"
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

                                    <div className="hidden md:block w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 relative z-10 flex-shrink-0" />

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
