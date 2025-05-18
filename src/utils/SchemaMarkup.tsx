
const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nibrių žirgynėlis",
    "description": "Patirkite jojimą žirgais, pasivaikščiojimus gamtoje ir bendravimą su gyvūnais mūsų šeimai draugiškame kaimo ūkyje.",
    "image": "/lovable-uploads/66de89ce-e32e-4b3d-83fb-9f791c886bd5.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nemuno 10",
      "addressLocality": "Nibriai",
      "addressRegion": "Prienų r.",
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
