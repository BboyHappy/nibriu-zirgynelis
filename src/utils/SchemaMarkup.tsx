
const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nibrių žirgynėlis",
    "description": "Pamatykite įspūdingą gamtą ir gyvūnus, šeimoms draugiškoje kaimo aplinkoje.",
    "image": "/lovable-uploads/66de89ce-e32e-4b3d-83fb-9f791c886bd5.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nemuno 10",
      "addressLocality": "Nibriai",
      "addressRegion": "Prienų r.",
      "postalCode": "",
      "addressCountry": "LT"
    },
    "telephone": "+37012345678",
    "openingHours": "Mo-Fr",
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
