import { PageProps } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';
import { Theme } from '../Theme';
import { Seo, SeoObject as ISeoObject, SeoProps } from './Seo';

const Main = styled('div')`
  margin: 32px 0;
  min-height: calc(100vh - 56px - 64px - 97px);
`;

export interface SiteProps extends SeoProps {
  path: PageProps['path'];
}

export const Site: React.FC<SiteProps> = ({ location, pageContext, path, seo, children }) => (
  <Theme>
    <Seo location={location} pageContext={pageContext} seo={seo} />
    <Navigation path={path} />
    <Main>{children}</Main>
    <Footer />
  </Theme>
);

export type SeoObject = ISeoObject;
