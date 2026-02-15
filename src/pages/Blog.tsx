import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';

const Blog = () => {
    const { t } = useTranslation();

    const blogPosts = [
        {
            id: 'futureAi',
            image: "hero_tech_visualization_1771165748665.png",
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 'cloudInfra',
            image: null,
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 'uxDesign',
            image: null,
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 'security',
            image: null,
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: 'microservices',
            image: null,
            color: "from-orange-500 to-red-600"
        },
        {
            id: 'roi',
            image: null,
            color: "from-indigo-500 to-purple-600"
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
                        <h1
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: t('blogPage.hero.title') }}
                        />
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {t('blogPage.hero.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 bg-slate-900 sticky top-20 z-40 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${index === 0
                                    ? 'bg-cyan-500 text-slate-900'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                {t(category.key)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">
                        {t('blogPage.featured.label')}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-effect rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-cyan-500/50 transition-all group"
                    >
                        <div className="relative h-80 lg:h-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20" />
                            {blogPosts[0].image && (
                                <img
                                    src={blogPosts[0].image}
                                    alt={t(`blogPage.posts.${blogPosts[0].id}.title`)}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className={`inline-block px-3 py-1 bg-linear-to-r ${blogPosts[0].color} text-white text-xs font-semibold rounded-full mb-4 w-fit`}>
                                {t(`blogPage.posts.${blogPosts[0].id}.category`)}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                {t(`blogPage.posts.${blogPosts[0].id}.title`)}
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                {t(`blogPage.posts.${blogPosts[0].id}.excerpt`)}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    {t(`blogPage.posts.${blogPosts[0].id}.author`)}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    {t(`blogPage.posts.${blogPosts[0].id}.date`)}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    {t(`blogPage.posts.${blogPosts[0].id}.readTime`)}
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all">
                                {t('blogPage.featured.readMore')} <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title={t('blogPage.latest.title')}
                        subtitle={t('blogPage.latest.subtitle')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-effect rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all group cursor-pointer"
                            >
                                <div className={`h-2 bg-linear-to-r ${post.color}`} />

                                {post.image && (
                                    <div className="h-48 bg-slate-900 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={t(`blogPage.posts.${post.id}.title`)}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Tag size={14} className="text-cyan-400" />
                                        <span className="text-xs font-semibold text-cyan-400">
                                            {t(`blogPage.posts.${post.id}.category`)}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {t(`blogPage.posts.${post.id}.title`)}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {t(`blogPage.posts.${post.id}.excerpt`)}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            {t(`blogPage.posts.${post.id}.author`)}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {t(`blogPage.posts.${post.id}.date`)}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                                        <span className="text-xs text-slate-500">
                                            {t(`blogPage.posts.${post.id}.readTime`)}
                                        </span>
                                        <button className="flex items-center gap-1 text-cyan-400 text-sm font-semibold hover:gap-2 transition-all">
                                            {t('blogPage.latest.read')} <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-linear-to-r from-cyan-500 to-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {t('blogPage.newsletter.title')}
                    </h2>
                    <p className="text-lg text-slate-900/80 mb-8">
                        {t('blogPage.newsletter.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder={t('blogPage.newsletter.placeholder')}
                            className="flex-1 px-6 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                        <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all transform hover:scale-105">
                            {t('blogPage.newsletter.button')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
