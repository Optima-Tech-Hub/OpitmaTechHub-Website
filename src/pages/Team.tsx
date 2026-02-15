import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Logo from '../components/Logo';

const Team = () => {
    const founders = [
        {
            name: "Amer",
            role: "Co-Founder & CEO",
            focus: "Product Vision & AI Strategy",
            description: "Leads overall product vision, defines AI strategy, and oversees system architecture. With 10+ years in tech, Amer brings deep expertise in AI and machine learning.",
            color: "from-blue-500 to-cyan-500",
            avatar: "A",
            social: {
                linkedin: "#",
                email: "amer@optimatech.hub",
                github: "#"
            }
        },
        {
            name: "Hisham",
            role: "Co-Founder & CTO",
            focus: "Engineering, UI & Infrastructure",
            description: "Oversees engineering excellence, UI/UX design, and manages cloud infrastructure for scalability. Expert in modern web technologies and system architecture.",
            color: "from-purple-500 to-pink-500",
            avatar: "H",
            social: {
                linkedin: "#",
                email: "hisham@optimatech.hub",
                github: "#"
            }
        },
        {
            name: "Saleh",
            role: "Co-Founder & CGO",
            focus: "Business Growth & Client Relations",
            description: "Leads client communication, project coordination, and drives business strategy. Passionate about building long-term client relationships.",
            color: "from-emerald-500 to-teal-500",
            avatar: "S",
            social: {
                linkedin: "#",
                email: "saleh@optimatech.hub",
                github: "#"
            }
        }
    ];

    const teamMembers = [
        {
            name: "Sarah Chen",
            role: "Lead AI Engineer",
            expertise: "Machine Learning & NLP",
            avatar: "SC"
        },
        {
            name: "Michael Rodriguez",
            role: "Senior Full-Stack Developer",
            expertise: "React, Node.js, Cloud",
            avatar: "MR"
        },
        {
            name: "Aisha Patel",
            role: "UX/UI Designer",
            expertise: "Product Design & Research",
            avatar: "AP"
        },
        {
            name: "David Kim",
            role: "DevOps Engineer",
            expertise: "Cloud Infrastructure & CI/CD",
            avatar: "DK"
        },
        {
            name: "Emma Thompson",
            role: "Data Scientist",
            expertise: "Analytics & Visualization",
            avatar: "ET"
        },
        {
            name: "James Wilson",
            role: "Backend Developer",
            expertise: "Python, APIs, Databases",
            avatar: "JW"
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
                            Meet Our <span className="text-gradient">Team</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            The talented people behind your digital transformation
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founders */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="The Founders" subtitle="The minds behind the machines" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {founders.map((founder, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="glass-effect rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all">
                                    {/* Color bar */}
                                    <div className={`h-2 bg-linear-to-r ${founder.color}`} />

                                    {/* Avatar */}
                                    <div className="p-8">
                                        <div className={`w-24 h-24 rounded-full bg-linear-to-r ${founder.color} mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform mx-auto`}>
                                            {founder.avatar}
                                        </div>

                                        {/* Info */}
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                                            <div className="text-cyan-400 font-medium mb-2 text-sm uppercase tracking-wide">
                                                {founder.role}
                                            </div>
                                            <div className="mb-4">
                                                <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                                                    {founder.focus}
                                                </span>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {founder.description}
                                            </p>
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex items-center justify-center gap-4 pt-6 border-t border-slate-800">
                                            <a
                                                href={founder.social.linkedin}
                                                className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-colors"
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                            <a
                                                href={`mailto:${founder.social.email}`}
                                                className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-colors"
                                            >
                                                <Mail size={18} />
                                            </a>
                                            <a
                                                href={founder.social.github}
                                                className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-colors"
                                            >
                                                <Github size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-slate-500 mt-12 italic text-lg"
                    >
                        "Together, we deliver efficient, end-to-end digital transformation."
                    </motion.p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Our Expert Team" subtitle="Skilled professionals dedicated to your success" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-effect p-6 rounded-xl group cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold text-white shrink-0 group-hover:scale-110 transition-transform">
                                        {member.avatar}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {member.name}
                                        </h4>
                                        <div className="text-cyan-400 text-sm mb-1">{member.role}</div>
                                        <div className="text-xs text-slate-500">{member.expertise}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 bg-linear-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Want to Join Our Team?
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        We're always looking for talented individuals who are passionate about technology
                    </p>
                    <a
                        href="/careers"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        View Open Positions
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Team;
