import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BaseCSS } from './BaseCSS';

const system = {};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={system}>
    <>
      <Normalize />
      <BaseCSS />
      {children}
    </>
  </ThemeProvider>
);

export { Theme };
