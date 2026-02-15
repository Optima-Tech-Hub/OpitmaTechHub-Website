import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, ToggleLeft, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Cookies = () => {
    const { t } = useTranslation();

    const whatAreCookiesTypes = t('cookiesPage.whatAreCookies.types', { returnObjects: true }) as any[];
    const categories = [
        { id: 'essential', icon: <Shield size={28} /> },
        { id: 'analytics', icon: <Eye size={28} /> },
        { id: 'functionality', icon: <Settings size={28} /> },
        { id: 'marketing', icon: <ToggleLeft size={28} /> }
    ];

    const specificCookies = t('cookiesPage.specificCookies.items', { returnObjects: true }) as any[];
    const manageMethods = t('cookiesPage.manageCookies.methods', { returnObjects: true }) as any[];
    const otherTech = t('cookiesPage.otherTechnologies.items', { returnObjects: true }) as any[];
    const contactMethods = t('cookiesPage.contact.methods', { returnObjects: true }) as string[];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
                            <Cookie className="text-purple-400" size={20} />
                            <span className="text-sm text-purple-400 font-medium">
                                {t('cookiesPage.hero.effectiveDateLabel')} {t('cookiesPage.hero.effectiveDate')}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {t('cookiesPage.hero.title')}
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('cookiesPage.hero.subtitle')}
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
                        {(t('cookiesPage.introduction', { returnObjects: true }) as string[]).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* What Are Cookies */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                <Info size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">
                                {t('cookiesPage.whatAreCookies.title')}
                            </h2>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            {t('cookiesPage.whatAreCookies.text')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {whatAreCookiesTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className="glass-effect p-6 rounded-xl border-l-4 border-purple-500"
                                >
                                    <h3 className="text-lg font-bold text-purple-400 mb-2">
                                        {type.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cookie Categories */}
            {(t('cookiesPage.categories', { returnObjects: true }) as any[]).map((category, index) => (
                <section
                    key={index}
                    className={`py-16 ${index % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'}`}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                        {categories.find(c => c.id === category.id)?.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                                </div>
                                {category.required ? (
                                    <span className="px-3 py-1 bg-red-500/10 text-red-400 text-sm font-medium rounded-full border border-red-500/20">
                                        {t('common.required', 'Required')}
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20">
                                        {t('common.optional', 'Optional')}
                                    </span>
                                )}
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-6">
                                {category.description}
                            </p>

                            <div className="space-y-4 mb-6">
                                <h3 className="text-lg font-bold text-purple-400">{t('common.examples', 'Examples')}:</h3>
                                <ul className="space-y-3 ml-6">
                                    {category.examples.map((example: string, exIndex: number) => (
                                        <li
                                            key={exIndex}
                                            className="text-slate-400 flex items-start gap-3"
                                        >
                                            <span className="text-purple-400 mt-1.5">•</span>
                                            <span>{example}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-400">
                                    {t('common.retention', 'Retention')}: <span className="text-white">{category.retention}</span>
                                </span>
                                <span className="text-slate-400">
                                    {t('common.canDisable', 'Can be disabled')}:{' '}
                                    <span className={category.canDisable ? 'text-green-400' : 'text-red-400'}>
                                        {category.canDisable ? t('common.yes', 'Yes') : t('common.no', 'No')}
                                    </span>
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Specific Cookies Table */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {t('cookiesPage.specificCookies.title')}
                        </h2>
                        <p className="text-slate-400 mb-8">{t('cookiesPage.specificCookies.description')}</p>

                        <div className="overflow-x-auto">
                            <table className="w-full glass-effect rounded-xl overflow-hidden">
                                <thead className="bg-slate-950">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            {t('cookiesPage.specificCookies.tableHead.name')}
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            {t('cookiesPage.specificCookies.tableHead.provider')}
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            {t('cookiesPage.specificCookies.tableHead.purpose')}
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            {t('cookiesPage.specificCookies.tableHead.type')}
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            {t('cookiesPage.specificCookies.tableHead.duration')}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {specificCookies.map((cookie, index) => (
                                        <tr
                                            key={index}
                                            className="border-t border-slate-800 hover:bg-slate-800/50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm text-white font-mono">
                                                {cookie.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-300">
                                                {cookie.provider}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-400">
                                                {cookie.purpose}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-medium ${cookie.type === 'Essential' || cookie.type === 'ضروري'
                                                        ? 'bg-red-500/10 text-red-400'
                                                        : cookie.type === 'Analytics' || cookie.type === 'تحليلات'
                                                            ? 'bg-blue-500/10 text-blue-400'
                                                            : 'bg-green-500/10 text-green-400'
                                                        }`}
                                                >
                                                    {cookie.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-400">
                                                {cookie.duration}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Manage Cookies */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                <Settings size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">
                                {t('cookiesPage.manageCookies.title')}
                            </h2>
                        </div>

                        <p className="text-slate-300 leading-relaxed mb-8">
                            {t('cookiesPage.manageCookies.intro')}
                        </p>

                        <div className="space-y-8">
                            {manageMethods.map((method, index) => (
                                <div key={index} className="glass-effect p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-purple-400 mb-3">
                                        {method.title}
                                    </h3>
                                    <p className="text-slate-300 mb-4">{method.description}</p>
                                    {method.options && (
                                        <ul className="space-y-2 ml-6">
                                            {method.options.map((option: string, optIndex: number) => (
                                                <li
                                                    key={optIndex}
                                                    className="text-slate-400 flex items-start gap-3"
                                                >
                                                    <span className="text-purple-400 mt-1.5">•</span>
                                                    <span>{option}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                            <p className="text-yellow-400 text-sm">
                                <strong>{t('cookiesPage.manageCookies.warningLabel')}:</strong> {t('cookiesPage.manageCookies.warning')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Other Technologies */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {t('cookiesPage.otherTechnologies.title')}
                        </h2>
                        <p className="text-slate-300 mb-8">
                            {t('cookiesPage.otherTechnologies.description')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {otherTech.map((tech, index) => (
                                <div
                                    key={index}
                                    className="glass-effect p-6 rounded-xl hover:border-purple-500/50 transition-all"
                                >
                                    <h3 className="text-lg font-bold text-purple-400 mb-2">
                                        {tech.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm">{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Updates */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            {t('cookiesPage.updates.title')}
                        </h2>
                        <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            {t('cookiesPage.updates.text')}
                        </p>
                    </motion.div>
                </div>
            </section>

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
                            {t('cookiesPage.contact.title')}
                        </h2>
                        <p className="text-slate-300 mb-6">{t('cookiesPage.contact.text')}</p>
                        <ul className="space-y-3">
                            {contactMethods.map((method, index) => (
                                <li key={index} className="text-slate-400 flex items-center gap-3">
                                    <span className="text-purple-400">•</span>
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

export default Cookies;
