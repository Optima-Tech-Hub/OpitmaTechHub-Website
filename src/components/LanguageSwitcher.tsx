import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    // Update document direction based on language
    useEffect(() => {
        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/30"
            aria-label="Switch Language"
            title="Switch Language"
        >
            <Languages size={18} />
            <span className="hidden sm:inline">
                {i18n.language === 'ar' ? 'EN' : 'ع'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
