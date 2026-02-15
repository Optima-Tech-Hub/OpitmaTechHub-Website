import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
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

    const handleDropdownEnter = (name: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveDropdown(name);
    };

    const handleDropdownLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200); // 200ms delay before closing
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            dropdown: [
                { name: 'Our Story', path: '/about#story' },
                { name: 'Mission & Vision', path: '/about#mission' },
                { name: 'Team', path: '/team' },
            ]
        },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'All Services', path: '/services' },
                { name: 'AI Integration', path: '/services#ai' },
                { name: 'Cloud Solutions', path: '/services#cloud' },
                { name: 'Maintenance', path: '/services#maintenance' },
            ]
        },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-15 h-15">
                            <Logo className="w-full h-full" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
                            Optima<span className="text-cyan-400">Tech</span>Hub
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => link.dropdown && handleDropdownEnter(link.name)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <Link
                                        to={link.path}
                                        className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                            ? 'text-cyan-400 bg-slate-800/50'
                                            : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/30'
                                            }`}
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDown size={16} className="ml-1" />}
                                    </Link>

                                    {/* Dropdown */}
                                    {link.dropdown && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden"
                                        >
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/contact"
                                className="ml-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2 transition-colors"
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
                        className="lg:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-screen overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === link.path
                                            ? 'text-cyan-400 bg-slate-800'
                                            : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-4 space-y-1 mt-1">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block px-3 py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/contact"
                                className="block text-center mt-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-lg font-bold transition-colors"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
