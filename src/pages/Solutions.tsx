import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Building2,
    GraduationCap,
    Hospital,
    ShoppingCart,
    Briefcase,
    Factory,
    ArrowRight,
    Check,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Solutions = () => {
    const solutions = [
        {
            icon: <Building2 size={48} className="text-cyan-400" />,
            industry: "Enterprise & Corporate",
            title: "Digital Transformation for Large Organizations",
            description: "Comprehensive platforms for enterprise resource planning, workflow automation, and data analytics.",
            features: [
                "Custom ERP Systems",
                "Workflow Automation",
                "Data Analytics Dashboards",
                "Document Management",
                "Employee Portals"
            ],
            benefits: [
                "40% increase in operational efficiency",
                "Real-time business insights",
                "Reduced operational costs"
            ],
            color: "from-cyan-500 to-blue-600"
        },
        {
            icon: <GraduationCap size={48} className="text-blue-500" />,
            industry: "Education",
            title: "Smart Learning Management Systems",
            description: "Integrated platforms for student management, online learning, and administrative automation.",
            features: [
                "Student Information Systems",
                "Online Learning Platforms",
                "Automated Grading Systems",
                "Parent-Teacher Portals",
                "Analytics & Reporting"
            ],
            benefits: [
                "Streamlined administration",
                "Enhanced learning experience",
                "Data-driven insights"
            ],
            color: "from-blue-500 to-purple-600"
        },
        {
            icon: <Hospital size={48} className="text-purple-500" />,
            industry: "Healthcare",
            title: "Healthcare Management Platforms",
            description: "HIPAA-compliant systems for patient management, scheduling, and medical records.",
            features: [
                "Electronic Health Records",
                "Appointment Scheduling",
                "Patient Portals",
                "Billing Integration",
                "Compliance Management"
            ],
            benefits: [
                "Improved patient care",
                "HIPAA compliance",
                "Operational efficiency"
            ],
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: <ShoppingCart size={48} className="text-emerald-400" />,
            industry: "E-Commerce & Retail",
            title: "Intelligent E-Commerce Solutions",
            description: "Full-stack e-commerce platforms with AI-powered recommendations and inventory management.",
            features: [
                "Custom Shopping Platforms",
                "AI Product Recommendations",
                "Inventory Management",
                "Payment Integration",
                "Customer Analytics"
            ],
            benefits: [
                "Increased conversion rates",
                "Better customer experience",
                "Automated operations"
            ],
            color: "from-emerald-500 to-teal-600"
        },
        {
            icon: <Briefcase size={48} className="text-orange-400" />,
            industry: "Financial Services",
            title: "Fintech & Banking Solutions",
            description: "Secure financial platforms with real-time processing and compliance features.",
            features: [
                "Payment Processing",
                "Financial Dashboards",
                "Compliance Automation",
                "Risk Management",
                "Customer Portals"
            ],
            benefits: [
                "Enhanced security",
                "Regulatory compliance",
                "Real-time processing"
            ],
            color: "from-orange-500 to-red-600"
        },
        {
            icon: <Factory size={48} className="text-indigo-400" />,
            industry: "Manufacturing & Logistics",
            title: "Supply Chain & Operations Management",
            description: "IoT-integrated systems for inventory tracking, production scheduling, and logistics.",
            features: [
                "Inventory Tracking",
                "Production Scheduling",
                "Quality Control",
                "Logistics Management",
                "IoT Integration"
            ],
            benefits: [
                "Reduced waste",
                "Optimized operations",
                "Real-time tracking"
            ],
            color: "from-indigo-500 to-purple-600"
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
                            Industry <span className="text-gradient">Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Tailored digital platforms designed for your specific industry needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className={`inline-block p-4 bg-gradient-to-r ${solution.color} rounded-2xl mb-6`}>
                                        {solution.icon}
                                    </div>
                                    <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                                        {solution.industry}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{solution.title}</h2>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">{solution.description}</p>

                                    {/* Features */}
                                    <div className="mb-8">
                                        <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                                        <div className="space-y-2">
                                            {solution.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <Check size={20} className="text-cyan-400 flex-shrink-0" />
                                                    <span className="text-slate-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="glass-effect p-6 rounded-xl">
                                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                            <TrendingUp size={20} className="text-emerald-400" />
                                            Benefits
                                        </h4>
                                        <ul className="space-y-2">
                                            {solution.benefits.map((benefit, idx) => (
                                                <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                                                    <Zap size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Visual Card */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="relative">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-20 rounded-3xl blur-3xl`} />
                                        <div className="relative glass-effect p-8 rounded-3xl">
                                            <div className={`w-full aspect-square bg-gradient-to-br ${solution.color} rounded-2xl opacity-10 flex items-center justify-center`}>
                                                {React.cloneElement(solution.icon, { size: 120, className: 'text-white opacity-30' })}
                                            </div>
                                            <div className="mt-6 space-y-3">
                                                {solution.features.slice(0, 3).map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg">
                                                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                                        <span className="text-sm text-slate-300">{feature}</span>
                                                    </div>
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

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Don't See Your Industry?
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        We create custom solutions for any industry. Let's discuss your specific needs.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        Contact Us <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
