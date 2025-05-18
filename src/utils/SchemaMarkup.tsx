
const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nibrių žirgynėlis",
    "description": "Experience horseback riding, scenic hikes, and animal interactions at our family-friendly countryside farm.",
    "image": "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nibrių kaimas",
      "addressLocality": "Nemunas Loops Regional Park",
      "addressRegion": "Lithuania",
      "postalCode": "LT-12345",
      "addressCountry": "LT"
    },
    "telephone": "+37012345678",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa-Su 10:00-16:00"
    ],
    "priceRange": "€€"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
