import { FC } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import { Show, Hide } from './svg';

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const switchIsOpened = () => {
    setIsOpened(!isOpened);
  };
  return (
    <Root onClick={switchIsOpened}>
      <Header>
        <Title>{title}</Title>
        {isOpened ? <Hide /> : <Show />}
      </Header>
      {isOpened ? <Content>{children}</Content> : null}
    </Root>
  );
};

export default Accordion;

type AccordionProps = {
  title: string;
  children: JSX.Element | string;
};

const Root = styled.div`
  box-shadow: 0px 12px 26px rgba(232, 233, 236, 0.57);
  border-radius: 16px;
  cursor: pointer;
  padding: 24px;
`;

const Title = styled.div`
  @media (max-width: 576px) {
    width: 70%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  max-height: 100px;
`;
const Content = styled.div`
  font-size: 14px;
  width: 60%;
  padding-top: 24px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
