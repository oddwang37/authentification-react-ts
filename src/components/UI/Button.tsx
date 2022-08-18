import { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const Button: FC<ButtonProps> = (props) => {
  return <Root {...props}>{props.children}</Root>;
};

export default Button;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Root = styled.button`
  width: 280px;
  height: 52px;
  background-color: #466efa;
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
  &:hover {
    border: 2px solid #466efa;
    background-color: rgba(0, 0, 0, 0);
    color: #466efa;
  }
`;
