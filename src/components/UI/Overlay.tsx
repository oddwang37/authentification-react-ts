import React, { FC } from 'react';
import styled from 'styled-components';

const Overlay: FC<OverlayProps> = ({ children, isVisible }) => {
  return <Root isVisible={isVisible}>{children}</Root>;
};

export default Overlay;

type OverlayProps = {
  children: JSX.Element;
  isVisible: boolean;
};

type RootProps = {
  isVisible: boolean;
};
const Root = styled.div<RootProps>`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  display: ${(p) => (p.isVisible ? 'block' : 'none')};
`;
