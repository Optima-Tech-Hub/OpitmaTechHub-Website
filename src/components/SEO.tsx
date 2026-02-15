import { useEffect } from 'react';
import { metadata as defaultMetadata } from '../constants/shared';

interface SEOProps {
    title?: string;
    description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
    useEffect(() => {
        // Set Title
        const baseTitle = defaultMetadata.title;
        document.title = title ? `${title} | Optima Tech Hub` : baseTitle;

        // Set Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || defaultMetadata.description);
        }

        // Set OG Title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', title || defaultMetadata.title);
        }
    }, [title, description]);

    return null;
};
