import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Globe, Twitter, Github, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { SHARED } from '../constants/shared';

// ================================
// CONTENT STRUCTURE
// ================================
// All content is structured as arrays of objects with translation keys
// This structure is ready for database integration

const FOOTER_STRUCTURE = {
    // Contact Information
    contactInfo: [
        {
            id: 'email',
            icon: <Mail size={18} />,
            value: SHARED.contact.email,
            link: `mailto:${SHARED.contact.email}`,
            type: 'email',
        },
        {
            id: 'phone',
            icon: <Phone size={18} />,
            value: SHARED.contact.phone,
            link: null,
            type: 'phone',
        },
        {
            id: 'address',
            icon: <MapPin size={18} />,
            value: SHARED.contact.address,
            link: null,
            type: 'address',
        },
    ],

    // Footer Links
    links: {
        company: [
            { nameKey: 'footer.company.aboutUs', path: SHARED.paths.about },
            { nameKey: 'footer.company.team', path: SHARED.paths.team },
            { nameKey: 'footer.company.careers', path: SHARED.paths.careers },
            { nameKey: 'footer.company.contact', path: SHARED.paths.contact },
        ],
        services: [
            { nameKey: 'footer.services.platformDev', path: `${SHARED.paths.services}${SHARED.serviceAnchors.platform}` },
            { nameKey: 'footer.services.aiIntegration', path: `${SHARED.paths.services}${SHARED.serviceAnchors.ai}` },
            { nameKey: 'footer.services.cloudSolutions', path: `${SHARED.paths.services}${SHARED.serviceAnchors.cloud}` },
            { nameKey: 'footer.services.maintenance', path: `${SHARED.paths.services}${SHARED.serviceAnchors.maintenance}` },
        ],
        resources: [
            { nameKey: 'footer.resources.caseStudies', path: SHARED.paths.caseStudies },
            { nameKey: 'footer.resources.blog', path: SHARED.paths.blog },
            { nameKey: 'footer.resources.solutions', path: SHARED.paths.solutions },
            { nameKey: 'footer.resources.faqs', path: `${SHARED.paths.about}${SHARED.aboutAnchors.faq}` },
        ],
    },

    // Social Links
    socialLinks: [
        { icon: <Linkedin size={20} />, href: SHARED.social.linkedin, label: 'LinkedIn' },
        { icon: <Twitter size={20} />, href: SHARED.social.twitter, label: 'Twitter' },
        { icon: <Mail size={20} />, href: `mailto:${SHARED.contact.email}`, label: 'Email' },
        { icon: <Github size={20} />, href: SHARED.social.github, label: 'Github' },
        { icon: <Globe size={20} />, href: SHARED.social.website, label: 'Website' },
    ],

    // Legal Links
    legalLinks: [
        { nameKey: 'footer.legal.privacy', path: SHARED.paths.privacy },
        { nameKey: 'footer.legal.terms', path: SHARED.paths.terms },
        { nameKey: 'footer.legal.cookies', path: SHARED.paths.cookies },
    ],
};

// ================================
// COMPONENT
// ================================

const FooterI18n = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

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
                                {SHARED.company.name}
                                <span className="text-cyan-400">{SHARED.company.nameAccent}</span>
                                {SHARED.company.nameSuffix}
                            </span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            {t('footer.company.description')}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            {FOOTER_STRUCTURE.contactInfo.map((contact) => (
                                <div key={contact.id} className="flex items-start gap-3 text-slate-400">
                                    <span className="text-cyan-400 mt-0.5 shrink-0">
                                        {contact.icon}
                                    </span>
                                    {contact.link ? (
                                        <a href={contact.link} className="hover:text-cyan-400 transition-colors">
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span>{contact.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-lg">
                            {t('footer.company.title')}
                        </h3>
                        <ul className="space-y-3">
                            {FOOTER_STRUCTURE.links.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {t(link.nameKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-lg">
                            {t('footer.services.title')}
                        </h3>
                        <ul className="space-y-3">
                            {FOOTER_STRUCTURE.links.services.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {t(link.nameKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 text-lg">
                            {t('footer.resources.title')}
                        </h3>
                        <ul className="space-y-3">
                            {FOOTER_STRUCTURE.links.resources.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {t(link.nameKey)}
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
                            <h4 className="text-white font-bold text-lg mb-2">
                                {t('footer.cta.heading')}
                            </h4>
                            <p className="text-slate-400 text-sm">
                                {t('footer.cta.description')}
                            </p>
                        </div>
                        <Link
                            to={SHARED.paths.contact}
                            className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 inline-flex items-center justify-center gap-2"
                        >
                            <Mail size={18} /> {t('footer.cta.button')}
                        </Link>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="border-t border-slate-900 pt-8">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        {FOOTER_STRUCTURE.socialLinks.map((social) => (
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
                    <p>
                        © {currentYear} {SHARED.company.fullName}. {t('footer.legal.copyright')}
                    </p>
                    <p className="mt-2 text-xs">
                        {FOOTER_STRUCTURE.legalLinks.map((link, index) => (
                            <span key={link.nameKey}>
                                <Link to={link.path} className="hover:text-cyan-400 transition-colors">
                                    {t(link.nameKey)}
                                </Link>
                                {index < FOOTER_STRUCTURE.legalLinks.length - 1 && ' • '}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterI18n;
