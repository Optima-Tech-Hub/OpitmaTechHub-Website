import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Globe, Twitter, Github, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Team', path: '/team' },
            { name: 'Careers', path: '/careers' },
            { name: 'Contact', path: '/contact' },
        ],
        services: [
            { name: 'Digital Platform Dev', path: '/services#platform' },
            { name: 'AI Integration', path: '/services#ai' },
            { name: 'Cloud Solutions', path: '/services#cloud' },
            { name: 'Maintenance & Support', path: '/services#maintenance' },
        ],
        resources: [
            { name: 'Case Studies', path: '/case-studies' },
            { name: 'Blog', path: '/blog' },
            { name: 'Solutions', path: '/solutions' },
            { name: 'FAQs', path: '/about#faq' },
        ],
    };

    const socialLinks = [
        { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
        { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
        { icon: <Github size={20} />, href: '#', label: 'Github' },
        { icon: <Globe size={20} />, href: '#', label: 'Website' },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10">
                                <Logo className="w-full h-full" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Optima<span className="text-cyan-400">Tech</span>Hub
                            </span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Building intelligent digital platforms that transform operations through powerful software solutions integrated with artificial intelligence.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3 text-slate-400">
                                <Mail size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                                <a href="mailto:contact@optimatech.hub" className="hover:text-cyan-400 transition-colors">
                                    contact@optimatech.hub
                                </a>
                            </div>
                            <div className="flex items-start gap-3 text-slate-400">
                                <Phone size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start gap-3 text-slate-400">
                                <MapPin size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span>123 Tech Street, Innovation City, IC 12345</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-lg">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-lg">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-lg">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Links & CTA */}
                <div className="border-t border-slate-900 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h4 className="text-white font-bold text-lg mb-2">Ready to Build Smarter Systems?</h4>
                            <p className="text-slate-400 text-sm">Let's create intelligent digital solutions that move your institution forward.</p>
                        </div>
                        <Link
                            to="/contact"
                            className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
                        >
                            <Mail size={18} /> Contact Us
                        </Link>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="border-t border-slate-900 pt-8">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 hover:bg-slate-800 transition-all"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 pt-6 text-center text-slate-600 text-sm">
                    <p>© {currentYear} Optima Tech Hub. All rights reserved.</p>
                    <p className="mt-2 text-xs">
                        <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                        {' • '}
                        <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                        {' • '}
                        <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
