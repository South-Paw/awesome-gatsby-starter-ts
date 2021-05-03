import { Site } from '.';

export default {
  title: 'Site',
  component: Site,
};

export const Simple = () => (
  <Site path="/" location={{ pathname: '/' } as any} pageContext={{}}>
    [site children]
  </Site>
);
