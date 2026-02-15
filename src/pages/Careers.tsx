import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Users, Zap, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Careers = () => {
    const openPositions = [
        {
            title: "Senior Full-Stack Developer",
            department: "Engineering",
            location: "Remote / Hybrid",
            type: "Full-time",
            experience: "5+ years",
            description: "Join our engineering team to build cutting-edge web applications and AI-powered platforms.",
            skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
            color: "from-cyan-500 to-blue-600"
        },
        {
            title: "AI/ML Engineer",
            department: "AI & Data Science",
            location: "Remote",
            type: "Full-time",
            experience: "3+ years",
            description: "Help us integrate advanced AI capabilities into our client solutions and products.",
            skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
            color: "from-blue-500 to-purple-600"
        },
        {
            title: "UX/UI Designer",
            department: "Design",
            location: "Hybrid",
            type: "Full-time",
            experience: "3+ years",
            description: "Create beautiful, intuitive interfaces that users love to interact with.",
            skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"],
            color: "from-purple-500 to-pink-600"
        },
        {
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "Remote",
            type: "Full-time",
            experience: "4+ years",
            description: "Build and maintain scalable infrastructure for our growing client base.",
            skills: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD", "Terraform"],
            color: "from-emerald-500 to-teal-600"
        },
        {
            title: "Product Manager",
            department: "Product",
            location: "Hybrid",
            type: "Full-time",
            experience: "5+ years",
            description: "Drive product strategy and work closely with clients to deliver exceptional solutions.",
            skills: ["Product Strategy", "Agile", "Stakeholder Management", "Analytics", "Technical Understanding"],
            color: "from-orange-500 to-red-600"
        },
        {
            title: "Junior Developer",
            department: "Engineering",
            location: "Remote / Hybrid",
            type: "Full-time",
            experience: "1-2 years",
            description: "Start your career with a supportive team building real-world applications.",
            skills: ["JavaScript", "React", "Basic Backend", "Git", "Willingness to Learn"],
            color: "from-indigo-500 to-purple-600"
        }
    ];

    const benefits = [
        {
            icon: <DollarSign className="text-cyan-400" size={32} />,
            title: "Competitive Salary",
            description: "Industry-leading compensation packages with performance bonuses"
        },
        {
            icon: <Heart className="text-pink-400" size={32} />,
            title: "Health & Wellness",
            description: "Comprehensive health insurance and wellness programs"
        },
        {
            icon: <Users className="text-purple-400" size={32} />,
            title: "Remote-First",
            description: "Work from anywhere with flexible hours and work-life balance"
        },
        {
            icon: <TrendingUp className="text-emerald-400" size={32} />,
            title: "Career Growth",
            description: "Clear advancement paths and professional development budget"
        },
        {
            icon: <Zap className="text-yellow-400" size={32} />,
            title: "Latest Tech",
            description: "Work with cutting-edge technologies and modern tools"
        },
        {
            icon: <Clock className="text-blue-400" size={32} />,
            title: "Paid Time Off",
            description: "Generous PTO policy including vacation and sick days"
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Join Our <span className="text-gradient">Team</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Build the future of digital transformation with a talented, passionate team
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Why Work With Us"
                        subtitle="More than just a job - it's a career"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-effect p-6 rounded-xl"
                            >
                                <div className="mb-4 p-4 bg-slate-950 rounded-full w-fit">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="Open Positions"
                        subtitle="Find your perfect role"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {openPositions.map((position, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-effect rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all group"
                            >
                                <div className={`h-2 bg-gradient-to-r ${position.color}`} />

                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                {position.title}
                                            </h3>
                                            <div className="text-cyan-400 text-sm font-medium">{position.department}</div>
                                        </div>
                                        <div className="p-3 bg-slate-950 rounded-lg">
                                            <Briefcase className="text-cyan-400" size={24} />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {position.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} />
                                            {position.type}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp size={16} />
                                            {position.experience}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                        {position.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="text-white font-semibold mb-2 text-sm">Required Skills:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {position.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-slate-900 text-slate-300 text-xs rounded-full border border-slate-800"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Apply Button */}
                                    <button className="w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                                        Apply Now <ArrowRight size={18} />
                                    </button>
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
                        Don't See the Right Role?
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        Send us your resume anyway. We're always looking for exceptional talent.
                    </p>
                    <a
                        href="mailto:careers@optimatech.hub"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        Send Your Resume
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Careers;
