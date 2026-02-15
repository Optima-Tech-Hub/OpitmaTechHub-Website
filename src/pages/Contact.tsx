import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert(t('contact.form.success'));
        // In a real app, you would handle loading state and error state here using t('contact.form.sending') and t('contact.form.error')
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <Mail className="text-cyan-400" size={24} />,
            title: t('contact.info.email.title'),
            details: t('contact.info.email.details'),
            action: "mailto:contact@optimatech.hub"
        },
        {
            icon: <Phone className="text-blue-400" size={24} />,
            title: t('contact.info.phone.title'),
            details: t('contact.info.phone.details'),
            action: "tel:+15551234567"
        },
        {
            icon: <MapPin className="text-purple-400" size={24} />,
            title: t('contact.info.visit.title'),
            details: t('contact.info.visit.details'),
            action: "#"
        }
    ];

    const socialLinks = [
        { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
        { icon: <Twitter size={20} />, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
        { icon: <Github size={20} />, href: "#", label: "Github", color: "hover:bg-gray-700" },
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
                        <h1
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: t('contact.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('contact.hero.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.action}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-effect p-8 rounded-xl text-center group cursor-pointer"
                            >
                                <div className="mb-4 p-4 bg-slate-950 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform">
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                                <p className="text-slate-400 text-sm">{info.details}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">{t('contact.form.title')}</h2>
                            <p className="text-slate-400 mb-8">{t('contact.form.subtitle')}</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact.form.name')} *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact.form.email')} *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact.form.company')}
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact.form.phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                                        {t('contact.form.service')} *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    >
                                        <option value="">{t('contact.form.servicePlaceholder')}</option>
                                        <option value="platform">{t('contact.form.services.platform')}</option>
                                        <option value="ai">{t('contact.form.services.ai')}</option>
                                        <option value="cloud">{t('contact.form.services.cloud')}</option>
                                        <option value="maintenance">{t('contact.form.services.maintenance')}</option>
                                        <option value="other">{t('contact.form.services.other')}</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        {t('contact.form.message')} *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                        placeholder={t('contact.form.messagePlaceholder')}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                                >
                                    {t('contact.form.submit')} <Send size={20} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Office Hours */}
                            <div className="glass-effect p-8 rounded-xl">
                                <h3 className="text-2xl font-bold text-white mb-6">{t('contact.officeHours.title')}</h3>
                                <div className="space-y-4 text-slate-300">
                                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                                        <span>{t('contact.officeHours.weekdays')}</span>
                                        <span className="text-cyan-400 font-semibold">{t('contact.officeHours.weekdaysTime')}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                                        <span>{t('contact.officeHours.saturday')}</span>
                                        <span className="text-cyan-400 font-semibold">{t('contact.officeHours.saturdayTime')}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>{t('contact.officeHours.sunday')}</span>
                                        <span className="text-slate-500">{t('contact.officeHours.closed')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="glass-effect p-8 rounded-xl">
                                <h3 className="text-2xl font-bold text-white mb-6">{t('contact.followUs.title')}</h3>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className={`flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-lg text-white ${social.color} transition-colors group`}
                                        >
                                            {social.icon}
                                            <span className="font-medium">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="glass-effect p-4 rounded-xl">
                                <div className="w-full h-64 bg-slate-900 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="text-cyan-400 mx-auto mb-2" size={32} />
                                        <p className="text-slate-400 text-sm">{t('contact.map.label')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="glass-effect p-6 rounded-xl bg-linear-to-r from-cyan-500/10 to-blue-600/10 border-cyan-500/50">
                                <h4 className="text-lg font-bold text-white mb-2">{t('contact.quickResponse.title')}</h4>
                                <p className="text-slate-300 text-sm">
                                    {t('contact.quickResponse.description')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
