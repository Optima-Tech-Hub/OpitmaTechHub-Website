import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-slate-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[200px] font-bold text-gradient leading-none">
                            404
                        </h1>
                    </div>

                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="inline-block p-6 glass-effect rounded-full">
                            <Search className="text-cyan-400" size={48} />
                        </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                        >
                            <Home size={20} />
                            Go Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-effect hover:bg-slate-800 text-white font-medium rounded-lg transition-all"
                        >
                            <ArrowLeft size={20} />
                            Go Back
                        </button>
                    </motion.div>

                    {/* Suggestions */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 glass-effect p-8 rounded-xl"
                    >
                        <h3 className="text-lg font-bold text-white mb-4">Or try these pages:</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: 'Services', path: '/services' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Case Studies', path: '/case-studies' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 rounded-lg transition-all text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
