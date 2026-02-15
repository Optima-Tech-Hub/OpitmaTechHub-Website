import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, UserX, ShieldCheck, Gavel } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// ================================
// STATIC CONFIGURATION VALUES
// ================================

const PAGE_CONTENT = {
    hero: {
        title: 'Terms of Service',
        subtitle: 'Please read these terms carefully before using our services. By accessing or using our services, you agree to be bound by these terms.',
        effectiveDate: 'February 15, 2026',
    },
    introduction: {
        text: [
            'These Terms of Service ("Terms") govern your access to and use of Optima Tech Hub\'s website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.',
            'If you do not agree to these Terms, you may not access or use our Services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.',
        ],
    },
    sections: [
        {
            icon: <UserX size={28} />,
            title: 'Account Registration & Use',
            content: [
                {
                    subtitle: 'Account Creation',
                    text: 'To access certain features of our Services, you may be required to create an account. When creating an account, you agree to:',
                    list: [
                        'Provide accurate, current, and complete information',
                        'Maintain and promptly update your account information',
                        'Maintain the security of your account credentials',
                        'Accept responsibility for all activities under your account',
                        'Notify us immediately of any unauthorized access',
                    ],
                },
                {
                    subtitle: 'Account Eligibility',
                    text: 'You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services. By using our Services, you represent and warrant that you meet these requirements.',
                },
                {
                    subtitle: 'Account Termination',
                    text: 'We reserve the right to suspend or terminate your account at any time, with or without notice, for violation of these Terms or for any other reason we deem appropriate.',
                },
            ],
        },
        {
            icon: <ShieldCheck size={28} />,
            title: 'Acceptable Use Policy',
            content: [
                {
                    subtitle: 'Permitted Use',
                    text: 'You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:',
                    list: [
                        'In any way that violates applicable laws or regulations',
                        'To transmit harmful, offensive, or inappropriate content',
                        'To impersonate any person or entity',
                        'To interfere with or disrupt our Services or servers',
                        'To attempt unauthorized access to our systems',
                        'To collect or harvest information about other users',
                        'To engage in any automated use of the system',
                    ],
                },
                {
                    subtitle: 'Content Standards',
                    text: 'Any content you submit through our Services must comply with applicable laws and must not be illegal, fraudulent, defamatory, obscene, threatening, or invasive of privacy.',
                },
            ],
        },
        {
            icon: <FileText size={28} />,
            title: 'Intellectual Property Rights',
            content: [
                {
                    subtitle: 'Our Intellectual Property',
                    text: 'All content, features, and functionality of our Services, including but not limited to:',
                    list: [
                        'Text, graphics, logos, and images',
                        'Software, code, and algorithms',
                        'Design, layout, and user interface',
                        'Trademarks, service marks, and trade names',
                        'Proprietary methodologies and processes',
                    ],
                    additionalText: 'are owned by Optima Tech Hub or our licensors and are protected by copyright, trademark, and other intellectual property laws.',
                },
                {
                    subtitle: 'Your Content',
                    text: 'You retain ownership of any content you submit to our Services. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with providing our Services.',
                },
                {
                    subtitle: 'License to Use Services',
                    text: 'Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal or internal business purposes.',
                },
            ],
        },
        {
            icon: <Scale size={28} />,
            title: 'Service Terms & Payments',
            content: [
                {
                    subtitle: 'Service Agreements',
                    text: 'Specific services may be subject to additional terms and conditions, which will be provided to you before you engage such services. These additional terms are incorporated into these Terms by reference.',
                },
                {
                    subtitle: 'Pricing & Payment',
                    text: 'Pricing for our services will be as quoted in your service agreement. Payment terms include:',
                    list: [
                        'Fees are due as specified in your service agreement',
                        'All fees are non-refundable unless otherwise stated',
                        'We reserve the right to change our pricing with notice',
                        'Late payments may incur additional charges',
                        'You are responsible for all taxes associated with your purchase',
                    ],
                },
                {
                    subtitle: 'Service Modifications',
                    text: 'We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of our Services.',
                },
            ],
        },
        {
            icon: <AlertCircle size={28} />,
            title: 'Disclaimers & Limitations',
            content: [
                {
                    subtitle: 'Service Warranty Disclaimer',
                    text: 'OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:',
                    list: [
                        'Warranties of merchantability or fitness for a particular purpose',
                        'Warranties of non-infringement',
                        'Warranties that the Services will be uninterrupted or error-free',
                        'Warranties regarding the accuracy or reliability of content',
                        'Warranties that defects will be corrected',
                    ],
                },
                {
                    subtitle: 'Limitation of Liability',
                    text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPTIMA TECH HUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.',
                },
                {
                    subtitle: 'Maximum Liability',
                    text: 'Our total liability to you for any claims arising from or related to these Terms or our Services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.',
                },
            ],
        },
        {
            icon: <Gavel size={28} />,
            title: 'Dispute Resolution',
            content: [
                {
                    subtitle: 'Governing Law',
                    text: 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Optima Tech Hub is registered, without regard to its conflict of law provisions.',
                },
                {
                    subtitle: 'Dispute Resolution Process',
                    text: 'In the event of any dispute arising from these Terms or our Services:',
                    list: [
                        'First, contact us to attempt informal resolution',
                        'If informal resolution fails, disputes will be resolved through binding arbitration',
                        'Arbitration will be conducted by a single arbitrator',
                        'Each party will bear their own costs and fees',
                        'The arbitrator\'s decision will be final and binding',
                    ],
                },
                {
                    subtitle: 'Class Action Waiver',
                    text: 'You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.',
                },
            ],
        },
    ],
    additional: {
        title: 'Additional Terms',
        items: [
            {
                subtitle: 'Indemnification',
                text: 'You agree to indemnify, defend, and hold harmless Optima Tech Hub and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our Services or violation of these Terms.',
            },
            {
                subtitle: 'Severability',
                text: 'If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.',
            },
            {
                subtitle: 'Entire Agreement',
                text: 'These Terms, together with our Privacy Policy and any additional terms you agree to, constitute the entire agreement between you and Optima Tech Hub regarding our Services.',
            },
            {
                subtitle: 'No Waiver',
                text: 'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.',
            },
        ],
    },
    contact: {
        title: 'Questions About Terms',
        text: 'If you have any questions about these Terms of Service, please contact us:',
        methods: [
            'Email: legal@optimatech.hub',
            'Phone: +1 (555) 123-4567',
            'Address: 123 Tech Street, Innovation City, IC 12345',
        ],
    },
};

// ================================
// COMPONENT
// ================================

const Terms = () => {
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
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    {section.icon}
                                </div>
                                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                            </div>

                            <div className="space-y-8">
                                {section.content.map((item, itemIndex) => (
                                    <div key={itemIndex} className="space-y-4">
                                        {item.subtitle && (
                                            <h3 className="text-xl font-bold text-blue-400">
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
                            {PAGE_CONTENT.additional.title}
                        </h2>
                        <div className="space-y-8">
                            {PAGE_CONTENT.additional.items.map((item, index) => (
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
                            {PAGE_CONTENT.contact.title}
                        </h2>
                        <p className="text-slate-300 mb-6">{PAGE_CONTENT.contact.text}</p>
                        <ul className="space-y-3">
                            {PAGE_CONTENT.contact.methods.map((method, index) => (
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
