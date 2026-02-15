import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Search, Filter, ChevronDown } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useRef, useEffect } from 'react';

const Blog = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setIsFilterOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const blogPosts = [
        {
            id: 'futureAi',
            image: "src/assets/hero_tech_visualization_1771165748665.png",
            color: "from-cyan-500 to-blue-600",
            category: 'ai'
        },
        {
            id: 'aiEthics',
            image: "src/assets/blog_ux_design_1771189204183.png",
            color: "from-blue-400 to-cyan-500",
            category: 'ai'
        },
        {
            id: 'cloudInfra',
            image: "src/assets/blog_cloud_infrastructure_1771189188387.png",
            color: "from-blue-500 to-purple-600",
            category: 'cloud'
        },
        {
            id: 'devopsPipelines',
            image: "src/assets/blog_business_roi_strategy_1771189255444.png",
            color: "from-indigo-500 to-blue-500",
            category: 'cloud'
        },
        {
            id: 'uxDesign',
            image: "src/assets/blog_ux_design_1771189204183.png",
            color: "from-purple-500 to-pink-600",
            category: 'design'
        },
        {
            id: 'security',
            image: "src/assets/blog_cybersecurity_1771189219030.png",
            color: "from-emerald-500 to-teal-600",
            category: 'security'
        },
        {
            id: 'scalingSystems',
            image: "src/assets/blog_distributed_systems_scaling_1771189232620.png",
            color: "from-cyan-600 to-emerald-500",
            category: 'architecture'
        },
        {
            id: 'microservices',
            image: "src/assets/blog_ux_design_1771189204183.png",
            color: "from-orange-500 to-red-600",
            category: 'architecture'
        },
        {
            id: 'roi',
            image: "src/assets/blog_business_roi_strategy_1771189255444.png",
            color: "from-indigo-500 to-purple-600",
            category: 'business'
        }
    ];

    const categories = [
        { id: 'all', key: 'blogPage.categories.all' },
        { id: 'ai', key: 'blogPage.categories.ai' },
        { id: 'cloud', key: 'blogPage.categories.cloud' },
        { id: 'design', key: 'blogPage.categories.design' },
        { id: 'security', key: 'blogPage.categories.security' },
        { id: 'architecture', key: 'blogPage.categories.architecture' },
        { id: 'business', key: 'blogPage.categories.business' }
    ];

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
            const searchTerm = searchQuery.toLowerCase();
            const matchesSearch =
                t(`blogPage.posts.${post.id}.title`).toLowerCase().includes(searchTerm) ||
                t(`blogPage.posts.${post.id}.excerpt`).toLowerCase().includes(searchTerm) ||
                t(`blogPage.posts.${post.id}.author`).toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery, t]);

    const featuredPost = blogPosts[0];

    const activeCategoryLabel = categories.find(c => c.id === activeCategory)?.key || 'blogPage.categories.all';

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: t('blogPage.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto">
                            {t('blogPage.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sticky Filter & Search Bar */}
            <section className="sticky top-20 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* Custom Category Dropdown */}
                        <div className="relative w-full lg:w-72" ref={filterRef}>
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className={`w-full flex items-center justify-between px-5 py-3.5 bg-slate-900 border border-slate-800 rounded-xl text-left transition-all hover:border-cyan-500/50 group ${isFilterOpen ? 'ring-2 ring-cyan-500/20 border-cyan-500/50' : ''}`}
                            >
                                <div className="flex items-center gap-3">
                                    <Filter size={18} className={activeCategory !== 'all' ? 'text-cyan-400' : 'text-slate-500'} />
                                    <span className={`font-medium ${activeCategory !== 'all' ? 'text-white' : 'text-slate-400'}`}>
                                        {t(activeCategoryLabel)}
                                    </span>
                                </div>
                                <ChevronDown size={20} className={`text-slate-500 transition-transform duration-300 ${isFilterOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isFilterOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 right-0 mt-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50 py-2 backdrop-blur-xl bg-slate-900/95"
                                    >
                                        <div className="max-h-80 overflow-y-auto custom-scrollbar">
                                            {categories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => {
                                                        setActiveCategory(category.id);
                                                        setIsFilterOpen(false);
                                                    }}
                                                    className={`w-full text-left px-5 py-3 flex items-center justify-between transition-colors ${activeCategory === category.id
                                                        ? 'bg-cyan-500/10 text-cyan-400'
                                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                                        }`}
                                                >
                                                    <span className="font-medium text-sm">{t(category.key)}</span>
                                                    {activeCategory === category.id && (
                                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Search Input */}
                        <div className="relative group max-w-md w-full">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t('blogPage.search.placeholder')}
                                className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-medium"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post - Only show when no active search/category or if it matches */}
            {activeCategory === 'all' && searchQuery === '' && (
                <section className="py-16 bg-slate-950">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-px bg-cyan-500" />
                            <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">
                                {t('blogPage.featured.label')}
                            </span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-effect rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-cyan-500/30 transition-all group shadow-2xl"
                        >
                            <div className="relative h-96 lg:h-full min-h-[400px] overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-600/10 z-10" />
                                <img
                                    src={featuredPost.image || "/src/assets/hero_tech_visualization_1771165748665.png"}
                                    alt={t(`blogPage.posts.${featuredPost.id}.title`)}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 lg:p-16 flex flex-col justify-center">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 bg-linear-to-r ${featuredPost.color} text-white text-xs font-bold rounded-full mb-6 w-fit shadow-lg shadow-cyan-500/20 uppercase tracking-wider`}>
                                    <Tag size={12} />
                                    {t(`blogPage.posts.${featuredPost.id}.category`)}
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors leading-tight">
                                    {t(`blogPage.posts.${featuredPost.id}.title`)}
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    {t(`blogPage.posts.${featuredPost.id}.excerpt`)}
                                </p>
                                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700 font-bold">
                                            {t(`blogPage.posts.${featuredPost.id}.author`).charAt(0)}
                                        </div>
                                        {t(`blogPage.posts.${featuredPost.id}.author`)}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-slate-600" />
                                        {t(`blogPage.posts.${featuredPost.id}.date`)}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-slate-600" />
                                        {t(`blogPage.posts.${featuredPost.id}.readTime`)}
                                    </div>
                                </div>
                                <button className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/10 w-fit">
                                    {t('blogPage.featured.readMore')} <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Blog Posts Grid */}
            <section className="py-16 bg-slate-950 min-h-[600px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {searchQuery || activeCategory !== 'all' ? (
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-2xl font-bold text-white">
                                {t('blogPage.latest.title')} ({filteredPosts.length})
                            </h2>
                        </div>
                    ) : (
                        <SectionHeader
                            title={t('blogPage.latest.title')}
                            subtitle={t('blogPage.latest.subtitle')}
                        />
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode='popLayout'>
                            {filteredPosts.filter(p => activeCategory !== 'all' || searchQuery !== '' || p.id !== featuredPost.id).map((post) => (
                                <motion.article
                                    layout
                                    key={post.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-effect rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group flex flex-col h-full shadow-lg"
                                >
                                    <div className={`h-1.5 bg-linear-to-r ${post.color}`} />

                                    <div className="relative h-56 bg-slate-900 overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent opacity-60 z-10" />
                                        <img
                                            src={post.image || "/src/assets/hero_tech_visualization_1771165748665.png"}
                                            alt={t(`blogPage.posts.${post.id}.title`)}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className={`px-2.5 py-1 bg-linear-to-r ${post.color} text-white text-[10px] font-bold rounded-md uppercase tracking-wider`}>
                                                {t(`blogPage.posts.${post.id}.category`)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={12} className="text-cyan-500" />
                                                {t(`blogPage.posts.${post.id}.date`)}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={12} className="text-cyan-500" />
                                                {t(`blogPage.posts.${post.id}.readTime`)}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
                                            {t(`blogPage.posts.${post.id}.title`)}
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {t(`blogPage.posts.${post.id}.excerpt`)}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs text-cyan-400 font-bold border border-slate-700">
                                                    {t(`blogPage.posts.${post.id}.author`).charAt(0)}
                                                </div>
                                                <span className="text-xs text-slate-500 font-medium">
                                                    {t(`blogPage.posts.${post.id}.author`)}
                                                </span>
                                            </div>
                                            <button className="flex items-center gap-1 text-cyan-400 text-sm font-bold hover:gap-2 transition-all">
                                                {t('blogPage.latest.read')} <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-800">
                                <Search size={32} className="text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                            <p className="text-slate-400">Try adjusting your search or filter to find what you're looking for.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            {t('blogPage.newsletter.title')}
                        </h2>
                        <p className="text-xl text-slate-900/70 mb-10 font-medium">
                            {t('blogPage.newsletter.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20">
                            <input
                                type="email"
                                placeholder={t('blogPage.newsletter.placeholder')}
                                className="flex-1 px-6 py-4 rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 border-none font-medium"
                            />
                            <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl">
                                {t('blogPage.newsletter.button')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
