import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, FileText } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// ================================
// STATIC CONFIGURATION VALUES
// ================================

const PAGE_CONTENT = {
    hero: {
        title: 'Privacy Policy',
        subtitle: 'Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.',
        effectiveDate: 'February 15, 2026',
    },
    introduction: {
        text: [
            'At Optima Tech Hub, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
            'By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.',
        ],
    },
    sections: [
        {
            icon: <Database size={28} />,
            title: 'Information We Collect',
            content: [
                {
                    subtitle: 'Personal Information',
                    text: 'We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us. This may include:',
                    list: [
                        'Name and contact information (email address, phone number)',
                        'Company name and job title',
                        'Billing and payment information',
                        'Project requirements and specifications',
                        'Communication preferences',
                    ],
                },
                {
                    subtitle: 'Automatically Collected Information',
                    text: 'When you visit our website, we may automatically collect certain information about your device, including:',
                    list: [
                        'IP address and browser type',
                        'Operating system and device information',
                        'Pages visited and time spent on pages',
                        'Referring website addresses',
                        'Cookies and similar tracking technologies',
                    ],
                },
            ],
        },
        {
            icon: <Eye size={28} />,
            title: 'How We Use Your Information',
            content: [
                {
                    subtitle: 'Primary Uses',
                    text: 'We use the information we collect or receive to:',
                    list: [
                        'Provide, operate, and maintain our services',
                        'Process your transactions and send related information',
                        'Respond to your inquiries and provide customer support',
                        'Send you technical notices, updates, and security alerts',
                        'Communicate about products, services, and events',
                        'Monitor and analyze usage and trends to improve user experience',
                        'Detect, prevent, and address technical issues and security threats',
                    ],
                },
                {
                    subtitle: 'Marketing Communications',
                    text: 'With your consent, we may send you marketing communications about our services, new features, and special offers. You can opt out of these communications at any time.',
                },
            ],
        },
        {
            icon: <Lock size={28} />,
            title: 'Data Protection & Security',
            content: [
                {
                    subtitle: 'Security Measures',
                    text: 'We implement appropriate technical and organizational security measures to protect your personal information, including:',
                    list: [
                        'Encryption of data in transit and at rest',
                        'Regular security assessments and audits',
                        'Access controls and authentication mechanisms',
                        'Employee training on data protection',
                        'Incident response and breach notification procedures',
                    ],
                },
                {
                    subtitle: 'Data Retention',
                    text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.',
                },
            ],
        },
        {
            icon: <UserCheck size={28} />,
            title: 'Your Privacy Rights',
            content: [
                {
                    subtitle: 'Your Rights',
                    text: 'Depending on your location, you may have the following rights regarding your personal information:',
                    list: [
                        'Access: Request access to your personal information',
                        'Correction: Request correction of inaccurate or incomplete data',
                        'Deletion: Request deletion of your personal information',
                        'Portability: Request transfer of your data to another service',
                        'Objection: Object to processing of your personal information',
                        'Restriction: Request restriction of processing your data',
                        'Withdraw Consent: Withdraw consent for data processing',
                    ],
                },
                {
                    subtitle: 'Exercising Your Rights',
                    text: 'To exercise any of these rights, please contact us at privacy@optimatech.hub. We will respond to your request within 30 days.',
                },
            ],
        },
        {
            icon: <Shield size={28} />,
            title: 'Third-Party Services',
            content: [
                {
                    subtitle: 'Service Providers',
                    text: 'We may share your information with third-party service providers who perform services on our behalf, such as:',
                    list: [
                        'Cloud hosting and infrastructure providers',
                        'Payment processing services',
                        'Analytics and monitoring tools',
                        'Email and communication platforms',
                        'Customer relationship management systems',
                    ],
                },
                {
                    subtitle: 'Third-Party Links',
                    text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.',
                },
            ],
        },
        {
            icon: <FileText size={28} />,
            title: 'Cookies & Tracking',
            content: [
                {
                    subtitle: 'Cookie Usage',
                    text: 'We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
                    list: [
                        'Essential cookies: Required for website functionality',
                        'Analytics cookies: Help us understand how visitors use our site',
                        'Preference cookies: Remember your settings and preferences',
                        'Marketing cookies: Track visitors across websites for advertising',
                    ],
                },
                {
                    subtitle: 'Managing Cookies',
                    text: 'You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.',
                },
            ],
        },
    ],
    contact: {
        title: 'Contact Us',
        text: 'If you have any questions about this Privacy Policy, please contact us:',
        methods: [
            'Email: privacy@optimatech.hub',
            'Phone: +1 (555) 123-4567',
            'Address: 123 Tech Street, Innovation City, IC 12345',
        ],
    },
    updates: {
        title: 'Policy Updates',
        text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.',
    },
};

// ================================
// COMPONENT
// ================================

const Privacy = () => {
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

            {/* Main Content Sections */}
            {PAGE_CONTENT.sections.map((section, sectionIndex) => (
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
                                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                            </div>

                            <div className="space-y-8">
                                {section.content.map((item, itemIndex) => (
                                    <div key={itemIndex} className="space-y-4">
                                        {item.subtitle && (
                                            <h3 className="text-xl font-bold text-cyan-400">
                                                {item.subtitle}
                                            </h3>
                                        )}
                                        <p className="text-slate-300 leading-relaxed">{item.text}</p>
                                        {item.list && (
                                            <ul className="space-y-3 ml-6">
                                                {item.list.map((listItem, listIndex) => (
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
                            {PAGE_CONTENT.contact.title}
                        </h2>
                        <p className="text-slate-300 mb-6">{PAGE_CONTENT.contact.text}</p>
                        <ul className="space-y-3">
                            {PAGE_CONTENT.contact.methods.map((method, index) => (
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
                            {PAGE_CONTENT.updates.title}
                        </h2>
                        <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            {PAGE_CONTENT.updates.text}
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
