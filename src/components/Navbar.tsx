import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { SHARED } from '../constants/shared';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const handleDropdownEnter = (key: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveDropdown(key);
    };

    const handleDropdownLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    // Navigation structure with translation keys
    const navLinks = [
        { nameKey: 'nav.home', path: SHARED.paths.home },
        {
            nameKey: 'nav.about',
            path: SHARED.paths.about,
            dropdown: [
                { nameKey: 'nav.ourStory', path: `${SHARED.paths.about}${SHARED.aboutAnchors.story}` },
                { nameKey: 'nav.mission', path: `${SHARED.paths.about}${SHARED.aboutAnchors.mission}` },
                { nameKey: 'nav.team', path: SHARED.paths.team },
            ]
        },
        {
            nameKey: 'nav.services',
            path: SHARED.paths.services,
            dropdown: [
                { nameKey: 'nav.allServices', path: SHARED.paths.services },
                { nameKey: 'nav.aiIntegration', path: `${SHARED.paths.services}${SHARED.serviceAnchors.ai}` },
                { nameKey: 'nav.cloudSolutions', path: `${SHARED.paths.services}${SHARED.serviceAnchors.cloud}` },
                { nameKey: 'nav.maintenance', path: `${SHARED.paths.services}${SHARED.serviceAnchors.maintenance}` },
            ]
        },
        { nameKey: 'nav.solutions', path: SHARED.paths.solutions },
        { nameKey: 'nav.caseStudies', path: SHARED.paths.caseStudies },
        { nameKey: 'nav.careers', path: SHARED.paths.careers },
        { nameKey: 'nav.blog', path: SHARED.paths.blog },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800/50 shadow-2xl shadow-black/20'
            : 'bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="shrink-0 flex items-center gap-3 group cursor-pointer">
                        <div className="w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                            <Logo className="w-full h-full" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white hidden sm:block group-hover:text-cyan-400 transition-colors duration-300">
                            {SHARED.company.name}
                            <span className="text-cyan-400">{SHARED.company.nameAccent}</span>
                            {SHARED.company.nameSuffix}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-2">
                            {/* Navigation Links */}
                            <div className="flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <div
                                        key={link.nameKey}
                                        className="relative"
                                        onMouseEnter={() => link.dropdown && handleDropdownEnter(link.nameKey)}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`
                                                relative flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium 
                                                transition-all duration-200 group
                                                ${location.pathname === link.path
                                                    ? 'text-cyan-400 bg-slate-800/60'
                                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                                                }
                                            `}
                                        >
                                            <span className="relative z-10">{t(link.nameKey)}</span>
                                            {link.dropdown && (
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-200 ${activeDropdown === link.nameKey ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            )}
                                            {/* Active indicator */}
                                            {location.pathname === link.path && (
                                                <motion.div
                                                    layoutId="activeNav"
                                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </Link>

                                        {/* Dropdown */}
                                        <AnimatePresence>
                                            {link.dropdown && activeDropdown === link.nameKey && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-xl border border-slate-800/50 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                                                >
                                                    <div className="p-2">
                                                        {link.dropdown.map((item) => (
                                                            <Link
                                                                key={item.nameKey}
                                                                to={item.path}
                                                                className="block px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-all duration-200 group"
                                                            >
                                                                <span className="flex items-center gap-2">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                                                                    {t(item.nameKey)}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="w-px h-8 bg-slate-700/50 mx-2" />

                            {/* Language Switcher */}
                            <LanguageSwitcher />

                            {/* CTA Button */}
                            <Link
                                to={SHARED.paths.contact}
                                className="
                                    relative ml-2 px-6 py-2.5 rounded-lg font-semibold text-sm
                                    bg-gradient-to-r from-cyan-500 to-blue-600 
                                    hover:from-cyan-400 hover:to-blue-500
                                    text-white shadow-lg shadow-cyan-500/25
                                    transition-all duration-300 
                                    hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105
                                    active:scale-95
                                "
                            >
                                {t('nav.getStarted')}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl scrollbar-hide"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
                            {navLinks.map((link) => (
                                <div key={link.nameKey} className="space-y-1">
                                    {link.dropdown ? (
                                        <>
                                            <div className="flex items-center justify-between       px-4 py-3 rounded-lg bg-slate-800/40 text-slate-200 font-medium border border-slate-700/30">
                                                <span>{t(link.nameKey)}</span>
                                                <ChevronDown size={16} className="text-slate-500" />
                                            </div>
                                            <div className="ml-4 pl-4 border-l-2 border-slate-700/50 space-y-1 mt-2">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.nameKey}
                                                        to={item.path}
                                                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                                        {t(item.nameKey)}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className={`
                                                block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                                                ${location.pathname === link.path
                                                    ? 'text-cyan-400 bg-slate-800/60 border border-cyan-500/20 shadow-lg shadow-cyan-500/10'
                                                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                                                }
                                            `}
                                        >
                                            {t(link.nameKey)}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile CTA */}
                            <div className="pt-4 mt-4 border-t border-slate-800/50">
                                <Link
                                    to={SHARED.paths.contact}
                                    className="
                                        block text-center px-6 py-3.5 rounded-lg font-bold
                                        bg-gradient-to-r from-cyan-500 to-blue-600 
                                        hover:from-cyan-400 hover:to-blue-500
                                        text-white shadow-lg shadow-cyan-500/25
                                        transition-all duration-300
                                        active:scale-95
                                    "
                                >
                                    {t('nav.getStarted')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
