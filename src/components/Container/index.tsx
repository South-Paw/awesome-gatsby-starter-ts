import styled from 'styled-components';

export interface ContainerProps {
  maxWidth?: number;
}

const Container = styled('div')<ContainerProps>`
  margin: 0 auto;
  padding: 0 24px;
  max-width: ${(p) => p.maxWidth}px;
  width: 100%;
`;

Container.defaultProps = {
  maxWidth: 800,
};

export { Container };
