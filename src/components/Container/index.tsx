import styled from 'styled-components';

export interface ContainerProps {
  maxWidth?: number;
}

export const Container = styled('div')<ContainerProps>`
  margin: 0 auto;
  padding: 0 24px;
  max-width: ${(p) => p.maxWidth ?? 800}px;
  width: 100%;
`;
