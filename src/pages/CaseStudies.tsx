import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';

const CaseStudies = () => {
    const caseStudies = [
        {
            title: "Enterprise Resource Planning System",
            client: "Global Manufacturing Corp",
            industry: "Manufacturing",
            challenge: "Managing complex operations across 15 facilities with legacy systems",
            solution: "Built custom ERP with real-time inventory tracking and AI-powered demand forecasting",
            results: [
                "45% reduction in operational costs",
                "60% faster order processing",
                "Real-time visibility across all facilities"
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "TensorFlow", "AWS"],
            color: "from-cyan-500 to-blue-600",
            duration: "8 months"
        },
        {
            title: "AI-Powered Learning Platform",
            client: "National University System",
            industry: "Education",
            challenge: "Delivering personalized learning to 50,000+ students remotely",
            solution: "Developed intelligent LMS with adaptive learning paths and automated grading",
            results: [
                "85% student satisfaction rate",
                "70% reduction in grading time",
                "3x increase in course completion"
            ],
            technologies: ["Next.js", "Python", "MongoDB", "OpenAI", "Azure"],
            color: "from-blue-500 to-purple-600",
            duration: "6 months"
        },
        {
            title: "Healthcare Patient Management",
            client: "Regional Medical Center",
            industry: "Healthcare",
            challenge: "Streamlining patient care across multiple departments with HIPAA compliance",
            solution: "Created integrated patient management system with electronic health records",
            results: [
                "50% faster patient check-in",
                "100% HIPAA compliance",
                "30% improvement in patient satisfaction"
            ],
            technologies: ["React", "Python", "PostgreSQL", "Redis", "GCP"],
            color: "from-purple-500 to-pink-600",
            duration: "10 months"
        },
        {
            title: "E-Commerce Platform with AI",
            client: "Fashion Retail Chain",
            industry: "Retail",
            challenge: "Competing in digital marketplace with outdated online presence",
            solution: "Built modern e-commerce platform with AI product recommendations",
            results: [
                "200% increase in online sales",
                "40% higher conversion rate",
                "25% increase in average order value"
            ],
            technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Vercel"],
            color: "from-emerald-500 to-teal-600",
            duration: "5 months"
        },
        {
            title: "Financial Analytics Dashboard",
            client: "Investment Firm",
            industry: "Finance",
            challenge: "Real-time market analysis and portfolio management for 1000+ clients",
            solution: "Developed secure analytics platform with real-time data processing",
            results: [
                "Real-time market insights",
                "90% faster report generation",
                "Enhanced client satisfaction"
            ],
            technologies: ["React", "Python", "TimescaleDB", "D3.js", "AWS"],
            color: "from-orange-500 to-red-600",
            duration: "7 months"
        },
        {
            title: "Supply Chain Optimization",
            client: "Logistics Corporation",
            industry: "Logistics",
            challenge: "Tracking and optimizing shipments across global supply chain",
            solution: "IoT-integrated platform for real-time tracking and route optimization",
            results: [
                "35% reduction in delivery times",
                "50% decrease in lost shipments",
                "Real-time tracking for all shipments"
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "IoT Sensors", "Azure"],
            color: "from-indigo-500 to-purple-600",
            duration: "9 months"
        }
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
                            Case <span className="text-gradient">Studies</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Real results from real clients. See how we've transformed operations across industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-effect rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group"
                            >
                                {/* Header with gradient */}
                                <div className={`h-2 bg-gradient-to-r ${study.color}`} />

                                <div className="p-8">
                                    {/* Industry tag */}
                                    <div className="inline-block px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-semibold rounded-full mb-4">
                                        {study.industry}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {study.title}
                                    </h3>
                                    <div className="text-slate-400 text-sm mb-6">{study.client}</div>

                                    {/* Challenge */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-2 text-sm">Challenge:</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{study.challenge}</p>
                                    </div>

                                    {/* Solution */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-2 text-sm">Solution:</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{study.solution}</p>
                                    </div>

                                    {/* Results */}
                                    <div className="mb-6 p-4 bg-slate-950 rounded-lg">
                                        <h4 className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
                                            <TrendingUp size={16} className="text-emerald-400" />
                                            Results:
                                        </h4>
                                        <ul className="space-y-2">
                                            {study.results.map((result, idx) => (
                                                <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-3 text-sm">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {study.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                        <Clock size={16} />
                                        <span>Project Duration: {study.duration}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { number: '50+', label: 'Projects Completed' },
                            { number: '98%', label: 'Client Satisfaction' },
                            { number: '15+', label: 'Industries Served' },
                            { number: '$10M+', label: 'Value Delivered' },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center glass-effect p-6 rounded-xl"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Ready to Become Our Next Success Story?
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        Let's discuss how we can transform your operations
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        Start Your Project <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
