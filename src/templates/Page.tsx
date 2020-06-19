import { PageProps } from 'gatsby';
import * as React from 'react';
import { Container } from '../components/Container';
import { Site } from '../components/Site';

const Page: React.FC<PageProps> = ({ children, location, pageContext, path }) => (
  <Site location={location} pageContext={pageContext} path={path}>
    <Container>{children}</Container>
  </Site>
);

export default Page;
