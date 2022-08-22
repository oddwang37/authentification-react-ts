import styled from 'styled-components';
import { FC } from 'react';

const GlobalContainer: FC<GlobalContainerProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default GlobalContainer;

type GlobalContainerProps = {
  children: JSX.Element;
};

const Root = styled.div`
  margin: 0 120px;
    @media (max-width: 768px) {
    margin: 0 32px;
  }
  @media (max-width: 375px) {
    margin: 0 16px;
  }
`;
