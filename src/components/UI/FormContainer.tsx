import React from 'react';
import styled from 'styled-components';

const FormContainer = ({ title, children }: FormContainerProps) => {
  return (
    <Root>
      <Title>{title}</Title>
      {children}
    </Root>
  );
};

export default FormContainer;

type FormContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Root = styled.div`
  padding: 5.5% 5%;
  box-shadow: 0px 12px 26px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  width: 424px;
  padding: 80px 72px 60px 72px;
  @media (max-width: 375px) {
    padding: 80px 32px 60px 32px;
  }
  @media (max-width: 576px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 48px;
  text-align: center;
`;
