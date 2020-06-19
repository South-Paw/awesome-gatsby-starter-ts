import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BaseCSS } from './BaseCSS';

const system = {};

export interface ThemeProps {}

export const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={system}>
    <>
      <Normalize />
      <BaseCSS />
      {children}
    </>
  </ThemeProvider>
);
