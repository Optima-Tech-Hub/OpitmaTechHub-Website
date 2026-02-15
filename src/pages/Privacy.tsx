import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, FileText } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
    const { t } = useTranslation();

    const sections = [
        { id: 'collection', icon: <Database size={28} /> },
        { id: 'usage', icon: <Eye size={28} /> },
        { id: 'protection', icon: <Lock size={28} /> },
        { id: 'rights', icon: <UserCheck size={28} /> },
        { id: 'thirdParty', icon: <Shield size={28} /> },
        { id: 'cookies', icon: <FileText size={28} /> }
    ];

    const introduction = t('privacyPage.introduction', { returnObjects: true }) as string[];
    const contactMethods = t('privacyPage.contact.methods', { returnObjects: true }) as string[];

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
                        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                            <Shield className="text-cyan-400" size={20} />
                            <span className="text-sm text-cyan-400 font-medium">
                                {t('privacyPage.hero.effectiveDateLabel')} {t('privacyPage.hero.effectiveDate')}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {t('privacyPage.hero.title')}
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('privacyPage.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-slate-300 text-lg leading-relaxed"
                    >
                        {introduction.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Main Content Sections */}
            {sections.map((section, sectionIndex) => (
                <section
                    key={sectionIndex}
                    className={`py-16 ${sectionIndex % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900'}`}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                    {section.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-white">
                                    {t(`privacyPage.sections.${section.id}.title`)}
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {(t(`privacyPage.sections.${section.id}.content`, { returnObjects: true }) as any[]).map((item, itemIndex) => (
                                    <div key={itemIndex} className="space-y-4">
                                        {item.subtitle && (
                                            <h3 className="text-xl font-bold text-cyan-400">
                                                {item.subtitle}
                                            </h3>
                                        )}
                                        <p className="text-slate-300 leading-relaxed">{item.text}</p>
                                        {item.list && (
                                            <ul className="space-y-3 ml-6">
                                                {item.list.map((listItem: string, listIndex: number) => (
                                                    <li
                                                        key={listIndex}
                                                        className="text-slate-400 flex items-start gap-3"
                                                    >
                                                        <span className="text-cyan-400 mt-1.5">•</span>
                                                        <span>{listItem}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Contact Section */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-effect p-8 rounded-2xl"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            {t('privacyPage.contact.title')}
                        </h2>
                        <p className="text-slate-300 mb-6">{t('privacyPage.contact.text')}</p>
                        <ul className="space-y-3">
                            {contactMethods.map((method, index) => (
                                <li key={index} className="text-slate-400 flex items-center gap-3">
                                    <span className="text-cyan-400">•</span>
                                    <span>{method}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Updates Section */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            {t('privacyPage.updates.title')}
                        </h2>
                        <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            {t('privacyPage.updates.text')}
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
