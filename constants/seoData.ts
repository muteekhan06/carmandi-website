export const HOME_PAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "name": "CarMandi",
            "url": "https://carmandi.pk",
            "logo": "https://carmandi.pk/logo.png",
            "description": "Pakistan's premier car auction marketplace.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "PK"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-300-1234567",
                "contactType": "customer service"
            }
        },
        {
            "@type": "WebSite",
            "name": "CarMandi",
            "url": "https://carmandi.pk",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://carmandi.pk/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        }
    ]
};
