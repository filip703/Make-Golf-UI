
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "A next-generation golf technology company specializing in AI-engineered, 3D-printed clubs and fitter SaaS platforms.",
  image = "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Hero%20Images/Make_Social_Share.jpg", // Fallback image needed
  url = "https://make.golf" 
}) => {
  const siteTitle = "MAKE GOLF";
  const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
