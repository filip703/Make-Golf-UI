
import React from 'react';
import { Helmet } from 'react-helmet-async';

type SchemaType = 'Organization' | 'Product' | 'Article' | 'FAQPage' | 'TechArticle';

interface SchemaMarkupProps {
  type: SchemaType;
  data: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  let schemaData = {};

  if (type === 'Organization') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MAKE GOLF",
      "url": "https://make.golf",
      "logo": "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Logo/Make_Icon_256px.png",
      "description": "Precision golf equipment. We engineer 3D-printed clubs based on your biomechanical data.",
      "sameAs": [
        "https://www.instagram.com/make_golf",
        "https://www.linkedin.com/company/make-golf",
        "https://www.youtube.com/@MakeGolf-t4n"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "team@make.golf",
        "contactType": "customer service",
        "areaServed": "World"
      }
    };
  } else if (type === 'Product') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      ...data
    };
  } else if (type === 'TechArticle') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      ...data
    };
  } else {
    schemaData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
