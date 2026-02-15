import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield, ToggleLeft, Info } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// ================================
// STATIC CONFIGURATION VALUES
// ================================

const PAGE_CONTENT = {
    hero: {
        title: 'Cookie Policy',
        subtitle: 'Learn about how we use cookies and similar technologies to provide, protect, and improve our services.',
        effectiveDate: 'February 15, 2026',
    },
    introduction: {
        text: [
            'This Cookie Policy explains how Optima Tech Hub uses cookies and similar tracking technologies when you visit our website. This policy provides you with clear and comprehensive information about the cookies we use and the purposes for using them.',
            'By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should change your browser settings accordingly or refrain from using our website.',
        ],
    },
    whatAreCookies: {
        title: 'What Are Cookies?',
        icon: <Info size={28} />,
        text: 'Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.',
        types: [
            {
                name: 'Session Cookies',
                description: 'Temporary cookies that expire when you close your browser. They help us maintain your session as you navigate through our website.',
            },
            {
                name: 'Persistent Cookies',
                description: 'Cookies that remain on your device for a set period or until you delete them. They help us remember your preferences and settings.',
            },
            {
                name: 'First-Party Cookies',
                description: 'Cookies set by our website directly. We use these to provide core functionality and improve your experience.',
            },
            {
                name: 'Third-Party Cookies',
                description: 'Cookies set by external services we use, such as analytics providers or advertising networks.',
            },
        ],
    },
    cookieCategories: [
        {
            icon: <Shield size={28} />,
            title: 'Essential Cookies',
            required: true,
            description: 'These cookies are necessary for our website to function properly. They enable core functionality such as security, network management, and accessibility.',
            examples: [
                'Authentication cookies to verify your identity',
                'Security cookies to protect against fraud',
                'Load balancing cookies to distribute traffic',
                'User interface customization cookies',
                'Session management cookies',
            ],
            retention: 'Session or up to 1 year',
            canDisable: false,
        },
        {
            icon: <Eye size={28} />,
            title: 'Analytics Cookies',
            required: false,
            description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
            examples: [
                'Google Analytics for traffic analysis',
                'Page view and visit duration tracking',
                'Click and navigation pattern analysis',
                'Error tracking and performance monitoring',
                'User journey and conversion tracking',
            ],
            retention: 'Up to 2 years',
            canDisable: true,
        },
        {
            icon: <Settings size={28} />,
            title: 'Functionality Cookies',
            required: false,
            description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
            examples: [
                'Language preference cookies',
                'Region and location preferences',
                'Font size and display preferences',
                'Previously viewed content',
                'Form auto-fill information',
            ],
            retention: 'Up to 1 year',
            canDisable: true,
        },
        {
            icon: <ToggleLeft size={28} />,
            title: 'Marketing Cookies',
            required: false,
            description: 'These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our campaigns.',
            examples: [
                'Advertising network cookies',
                'Social media integration cookies',
                'Remarketing and retargeting cookies',
                'Campaign performance tracking',
                'Interest-based advertising cookies',
            ],
            retention: 'Up to 2 years',
            canDisable: true,
        },
    ],
    specificCookies: {
        title: 'Specific Cookies We Use',
        description: 'Below is a detailed list of the cookies we use on our website:',
        cookies: [
            {
                name: '_ga',
                provider: 'Google Analytics',
                purpose: 'Distinguishes unique users and tracks website usage',
                type: 'Analytics',
                duration: '2 years',
            },
            {
                name: '_gid',
                provider: 'Google Analytics',
                purpose: 'Distinguishes unique users',
                type: 'Analytics',
                duration: '24 hours',
            },
            {
                name: 'session_id',
                provider: 'Optima Tech Hub',
                purpose: 'Maintains user session state',
                type: 'Essential',
                duration: 'Session',
            },
            {
                name: 'cookie_consent',
                provider: 'Optima Tech Hub',
                purpose: 'Stores cookie consent preferences',
                type: 'Essential',
                duration: '1 year',
            },
            {
                name: 'lang_pref',
                provider: 'Optima Tech Hub',
                purpose: 'Remembers language preference',
                type: 'Functionality',
                duration: '1 year',
            },
        ],
    },
    manageCookies: {
        title: 'How to Manage Cookies',
        icon: <Settings size={28} />,
        intro: 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in several ways:',
        methods: [
            {
                title: 'Browser Settings',
                description: 'Most web browsers allow you to control cookies through their settings. You can set your browser to:',
                options: [
                    'Block all cookies',
                    'Block third-party cookies only',
                    'Delete cookies when you close your browser',
                    'Notify you when a website tries to set a cookie',
                ],
            },
            {
                title: 'Cookie Consent Tool',
                description: 'When you first visit our website, you can use our cookie consent banner to choose which categories of cookies you want to accept.',
            },
            {
                title: 'Opt-Out Links',
                description: 'For specific third-party cookies, you can use these opt-out mechanisms:',
                options: [
                    'Google Analytics Opt-out: https://tools.google.com/dlpage/gaoptout',
                    'Network Advertising Initiative: http://www.networkadvertising.org/choices/',
                    'Digital Advertising Alliance: http://www.aboutads.info/choices/',
                ],
            },
        ],
        warning: 'Please note that blocking or deleting cookies may impact your experience on our website and limit the functionality available to you.',
    },
    otherTechnologies: {
        title: 'Other Tracking Technologies',
        description: 'In addition to cookies, we may use other tracking technologies:',
        technologies: [
            {
                name: 'Web Beacons',
                description: 'Small graphic images (also known as pixel tags) that allow us to monitor user activity and site traffic patterns.',
            },
            {
                name: 'Local Storage',
                description: 'Browser storage that allows us to store data locally on your device for improved performance and functionality.',
            },
            {
                name: 'Session Storage',
                description: 'Temporary storage that is cleared when you close your browser tab or window.',
            },
            {
                name: 'Device Fingerprinting',
                description: 'Collecting device and browser configuration information to identify unique devices for security and fraud prevention.',
            },
        ],
    },
    updates: {
        title: 'Updates to This Policy',
        text: 'We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Effective Date" at the top.',
    },
    contact: {
        title: 'Contact Us',
        text: 'If you have any questions about our use of cookies or this Cookie Policy, please contact us:',
        methods: [
            'Email: privacy@optimatech.hub',
            'Phone: +1 (555) 123-4567',
            'Address: 123 Tech Street, Innovation City, IC 12345',
        ],
    },
};

// ================================
// COMPONENT
// ================================

const Cookies = () => {
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
                                Effective Date: {PAGE_CONTENT.hero.effectiveDate}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {PAGE_CONTENT.hero.title}
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {PAGE_CONTENT.hero.subtitle}
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
                        {PAGE_CONTENT.introduction.text.map((paragraph, index) => (
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
                                {PAGE_CONTENT.whatAreCookies.icon}
                            </div>
                            <h2 className="text-3xl font-bold text-white">
                                {PAGE_CONTENT.whatAreCookies.title}
                            </h2>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            {PAGE_CONTENT.whatAreCookies.text}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {PAGE_CONTENT.whatAreCookies.types.map((type, index) => (
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
            {PAGE_CONTENT.cookieCategories.map((category, index) => (
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
                                        {category.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                                </div>
                                {category.required ? (
                                    <span className="px-3 py-1 bg-red-500/10 text-red-400 text-sm font-medium rounded-full border border-red-500/20">
                                        Required
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm font-medium rounded-full border border-green-500/20">
                                        Optional
                                    </span>
                                )}
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-6">
                                {category.description}
                            </p>

                            <div className="space-y-4 mb-6">
                                <h3 className="text-lg font-bold text-purple-400">Examples:</h3>
                                <ul className="space-y-3 ml-6">
                                    {category.examples.map((example, exIndex) => (
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
                                    Retention: <span className="text-white">{category.retention}</span>
                                </span>
                                <span className="text-slate-400">
                                    Can be disabled:{' '}
                                    <span className={category.canDisable ? 'text-green-400' : 'text-red-400'}>
                                        {category.canDisable ? 'Yes' : 'No'}
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
                            {PAGE_CONTENT.specificCookies.title}
                        </h2>
                        <p className="text-slate-400 mb-8">{PAGE_CONTENT.specificCookies.description}</p>

                        <div className="overflow-x-auto">
                            <table className="w-full glass-effect rounded-xl overflow-hidden">
                                <thead className="bg-slate-950">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            Cookie Name
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            Provider
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            Purpose
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            Type
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-purple-400">
                                            Duration
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PAGE_CONTENT.specificCookies.cookies.map((cookie, index) => (
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
                                                    className={`px-2 py-1 rounded-full text-xs font-medium ${cookie.type === 'Essential'
                                                        ? 'bg-red-500/10 text-red-400'
                                                        : cookie.type === 'Analytics'
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
                                {PAGE_CONTENT.manageCookies.icon}
                            </div>
                            <h2 className="text-3xl font-bold text-white">
                                {PAGE_CONTENT.manageCookies.title}
                            </h2>
                        </div>

                        <p className="text-slate-300 leading-relaxed mb-8">
                            {PAGE_CONTENT.manageCookies.intro}
                        </p>

                        <div className="space-y-8">
                            {PAGE_CONTENT.manageCookies.methods.map((method, index) => (
                                <div key={index} className="glass-effect p-6 rounded-xl">
                                    <h3 className="text-xl font-bold text-purple-400 mb-3">
                                        {method.title}
                                    </h3>
                                    <p className="text-slate-300 mb-4">{method.description}</p>
                                    {method.options && (
                                        <ul className="space-y-2 ml-6">
                                            {method.options.map((option, optIndex) => (
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
                                <strong>Note:</strong> {PAGE_CONTENT.manageCookies.warning}
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
                            {PAGE_CONTENT.otherTechnologies.title}
                        </h2>
                        <p className="text-slate-300 mb-8">
                            {PAGE_CONTENT.otherTechnologies.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {PAGE_CONTENT.otherTechnologies.technologies.map((tech, index) => (
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
                            {PAGE_CONTENT.updates.title}
                        </h2>
                        <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            {PAGE_CONTENT.updates.text}
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
                            {PAGE_CONTENT.contact.title}
                        </h2>
                        <p className="text-slate-300 mb-6">{PAGE_CONTENT.contact.text}</p>
                        <ul className="space-y-3">
                            {PAGE_CONTENT.contact.methods.map((method, index) => (
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
