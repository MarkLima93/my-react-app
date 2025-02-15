import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ 
  title, 
  description, 
  keywords,
  image = "https://static.wixstatic.com/media/4ca325_aebf1ad82d38463ba80def4e127d8322~mv2.png",
  url 
}) {
  const siteTitle = "Balance Center Home Care";
  const defaultDescription = "Professional home care services providing senior care, child care, and special needs care with compassion and excellence.";
  const defaultKeywords = "home care, senior care, child care, special needs care, professional caregivers, Balance Center";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Balance Center Home Care" />
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="https://static.wixstatic.com/media/4ca325_aebf1ad82d38463ba80def4e127d8322~mv2.png" />
    </Helmet>
  );
}

export default SEO; 