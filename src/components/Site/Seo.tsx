import { graphql, PageProps, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SeoObject {
  name?: string;
  siteUrl?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  type?: string;
  image?: string;
}

interface GQLSiteMetadata {
  site: { siteMetadata: Omit<SeoObject, 'title'> };
}

export interface SeoProps {
  location: PageProps['location'];
  pageContext: PageProps['pageContext'];
  seo?: SeoObject;
}

export const Seo: React.FC<SeoProps> = ({ location: { pathname }, pageContext, seo }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<GQLSiteMetadata>(graphql`
    {
      site {
        siteMetadata {
          name
          siteUrl
          description
          keywords
          type
          image
        }
      }
    }
  `);

  const { name, siteUrl, title, description, keywords, type, image } = {
    ...siteMetadata,
    ...seo,
    ...(pageContext as any).frontmatter,
  } as SeoObject;

  const url = `${siteUrl}${pathname}`;

  return (
    <Helmet titleTemplate={`%s • ${name}`} defaultTitle={name}>
      <html lang="en" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join(', ')} />

      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};
