const SITE_URL = 'https://limagodoyadvogados.com.br';

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Lima & Godoy Advogados Associados",
  "image": `${SITE_URL}/og-image.webp`,
  "@id": SITE_URL,
  "url": SITE_URL,
  "telephone": "+5519982298018",
  "email": "contato@limagodoyadvogados.com.br",
  "priceRange": "$$$",
  "description": "Escritório de advocacia em Campinas - SP com mais de 10 anos de experiência. Especializado em Direito das Famílias, Sucessões, Previdenciário (INSS) e Trabalhista. Divórcio, Inventário, Partilha de Bens e Aposentadorias.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Regente Feijó, 712 - 1º Andar - Sala 14 A - Centro",
    "addressLocality": "Campinas",
    "addressRegion": "SP",
    "postalCode": "13013-051",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-22.9038",
    "longitude": "-47.0592"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Campinas"
    },
    {
      "@type": "City",
      "name": "Sumaré"
    },
    {
      "@type": "City",
      "name": "Hortolândia"
    },
    {
      "@type": "City",
      "name": "Valinhos"
    },
    {
      "@type": "City",
      "name": "Vinhedo"
    },
    {
      "@type": "City",
      "name": "Indaiatuba"
    },
    {
      "@type": "City",
      "name": "Paulínia"
    },
    {
      "@type": "City",
      "name": "Americana"
    },
    {
      "@type": "State",
      "name": "São Paulo"
    }
  ]
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Lima & Godoy Advogados Associados",
  "url": SITE_URL
};

export const generateBreadcrumbSchema = (items: { name: string, item: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": SITE_URL
      },
      ...items.map((breadcrumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": breadcrumb.name,
        "item": `${SITE_URL}${breadcrumb.item}`
      }))
    ]
  };
};

export const generateServiceSchema = (name: string, description: string, urlPath: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Serviços Jurídicos",
    "provider": {
      "@id": SITE_URL,
      "@type": "LegalService",
      "name": "Lima & Godoy Advogados Associados"
    },
    "name": name,
    "description": description,
    "url": `${SITE_URL}${urlPath}`
  };
};

export const generateFAQSchema = (faqs: { question: string, answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
