import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
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
        alert('Thank you for your message! We\'ll get back to you soon.');
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
            title: "Email Us",
            details: "contact@optimatech.hub",
            action: "mailto:contact@optimatech.hub"
        },
        {
            icon: <Phone className="text-blue-400" size={24} />,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            action: "tel:+15551234567"
        },
        {
            icon: <MapPin className="text-purple-400" size={24} />,
            title: "Visit Us",
            details: "123 Tech Street, Innovation City, IC 12345",
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Get In <span className="text-gradient">Touch</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Ready to transform your operations? Let's start a conversation about your project.
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
                            <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                            <p className="text-slate-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                            Name *
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
                                            Email *
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
                                            Company
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
                                            Phone
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
                                        Service Interested In *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="platform">Digital Platform Development</option>
                                        <option value="ai">AI Integration</option>
                                        <option value="cloud">Cloud & Infrastructure</option>
                                        <option value="maintenance">Maintenance & Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                                >
                                    Send Message <Send size={20} />
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
                                <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
                                <div className="space-y-4 text-slate-300">
                                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                                        <span>Monday - Friday</span>
                                        <span className="text-cyan-400 font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                                        <span>Saturday</span>
                                        <span className="text-cyan-400 font-semibold">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Sunday</span>
                                        <span className="text-slate-500">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="glass-effect p-8 rounded-xl">
                                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
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
                                        <p className="text-slate-400 text-sm">Map Location</p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-cyan-500/50">
                                <h4 className="text-lg font-bold text-white mb-2">Quick Response</h4>
                                <p className="text-slate-300 text-sm">
                                    We typically respond to all inquiries within 24 hours during business days.
                                    For urgent matters, please call us directly.
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
