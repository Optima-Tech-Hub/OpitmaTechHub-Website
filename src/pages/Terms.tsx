import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, UserX, ShieldCheck, Gavel } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Terms = () => {
    const { t } = useTranslation();

    const sections = [
        { id: 'account', icon: <UserX size={28} /> },
        { id: 'acceptableUse', icon: <ShieldCheck size={28} /> },
        { id: 'intellectualProperty', icon: <FileText size={28} /> },
        { id: 'payments', icon: <Scale size={28} /> },
        { id: 'limitations', icon: <AlertCircle size={28} /> },
        { id: 'disputeResolution', icon: <Gavel size={28} /> }
    ];

    const introduction = t('termsPage.introduction', { returnObjects: true }) as string[];
    const additionalItems = t('termsPage.additional.items', { returnObjects: true }) as any[];
    const contactMethods = t('termsPage.contact.methods', { returnObjects: true }) as string[];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                            <Scale className="text-blue-400" size={20} />
                            <span className="text-sm text-blue-400 font-medium">
                                {t('termsPage.hero.effectiveDateLabel')} {t('termsPage.hero.effectiveDate')}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {t('termsPage.hero.title')}
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('termsPage.hero.subtitle')}
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
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    {section.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-white">
                                    {t(`termsPage.sections.${section.id}.title`)}
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {(t(`termsPage.sections.${section.id}.content`, { returnObjects: true }) as any[]).map((item, itemIndex) => (
                                    <div key={itemIndex} className="space-y-4">
                                        {item.subtitle && (
                                            <h3 className="text-xl font-bold text-blue-400">
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
                                                        <span className="text-blue-400 mt-1.5">•</span>
                                                        <span>{listItem}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {item.additionalText && (
                                            <p className="text-slate-300 leading-relaxed mt-4">
                                                {item.additionalText}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Additional Terms */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">
                            {t('termsPage.additional.title')}
                        </h2>
                        <div className="space-y-8">
                            {additionalItems.map((item, index) => (
                                <div key={index} className="space-y-3">
                                    <h3 className="text-xl font-bold text-blue-400">
                                        {item.subtitle}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-effect p-8 rounded-2xl"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            {t('termsPage.contact.title')}
                        </h2>
                        <p className="text-slate-300 mb-6">{t('termsPage.contact.text')}</p>
                        <ul className="space-y-3">
                            {contactMethods.map((method, index) => (
                                <li key={index} className="text-slate-400 flex items-center gap-3">
                                    <span className="text-blue-400">•</span>
                                    <span>{method}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
