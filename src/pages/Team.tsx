import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';

const Team = () => {
    const { t } = useTranslation();

    const founders = [
        {
            id: 'amer',
            color: "from-blue-500 to-cyan-500",
            avatar: "A",
            social: {
                linkedin: "#",
                email: "amer@optimatech.hub",
                github: "#"
            }
        },
        {
            id: 'hisham',
            color: "from-purple-500 to-pink-500",
            avatar: "H",
            social: {
                linkedin: "#",
                email: "hisham@optimatech.hub",
                github: "#"
            }
        },
        {
            id: 'saleh',
            color: "from-emerald-500 to-teal-500",
            avatar: "S",
            social: {
                linkedin: "#",
                email: "saleh@optimatech.hub",
                github: "#"
            }
        }
    ];

    const teamMembers = t('teamPage.teamMembers.items', { returnObjects: true }) as any[];

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
                        <h1
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: t('teamPage.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('teamPage.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founders */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('teamPage.founders.title')}
                        subtitle={t('teamPage.founders.subtitle')}
                    />

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
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {t(`teamPage.founders.items.${founder.id}.name`)}
                                            </h3>
                                            <div className="text-cyan-400 font-medium mb-2 text-sm uppercase tracking-wide">
                                                {t(`teamPage.founders.items.${founder.id}.role`)}
                                            </div>
                                            <div className="mb-4">
                                                <span className="text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                                                    {t(`teamPage.founders.items.${founder.id}.focus`)}
                                                </span>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {t(`teamPage.founders.items.${founder.id}.description`)}
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
                        {t('teamPage.founders.quote')}
                    </motion.p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('teamPage.teamMembers.title')}
                        subtitle={t('teamPage.teamMembers.subtitle')}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => {
                            // Helper to get initials for avatar
                            const initials = member.name.split(' ').map((n: string) => n[0]).join('');

                            return (
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
                                            {initials}
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
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-20 bg-linear-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        {t('teamPage.cta.title')}
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        {t('teamPage.cta.subtitle')}
                    </p>
                    <a
                        href="/careers"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
                    >
                        {t('teamPage.cta.button')}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Team;
