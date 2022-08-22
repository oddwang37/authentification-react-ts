import { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const Button: FC<ButtonProps> = (props) => {
  return (
    <Root {...props} disabled={props.inactive}>
      {props.children}
    </Root>
  );
};

export default Button;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  inactive?: boolean;
}

type RootProps = {
  inactive?: boolean;
};
const Root = styled.button<RootProps>`
  width: 100%;
  height: 52px;
  background-color: ${(p) => (p.inactive ? '#E5EBFF' : '#466efa')};
  padding: 14px 20px;
  border-radius: 12px;
  text-align: center;
  margin-top: 20px;
  font-weight: 700;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: 'Gilroy';
  font-weight: 700;
  transition: 0.3s all;
  ${(p) =>
    p.inactive
      ? ''
      : `
  &:hover {
    border: 2px solid #466efa;
    background-color: rgba(0, 0, 0, 0);
    color: #466efa;
  }`}
`;
