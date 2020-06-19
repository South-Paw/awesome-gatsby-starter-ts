import { PageProps } from 'gatsby';
import * as React from 'react';
import Readme from '../../README.md';
import { Container } from '../components/Container';
import { SeoObject, Site } from '../components/Site';

const seo: SeoObject = {
  title: 'Home',
};

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <Site seo={seo} {...props}>
      <Container>
        <Readme />
      </Container>
    </Site>
  );
};

export default IndexPage;
