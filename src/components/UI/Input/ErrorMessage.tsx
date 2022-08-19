import { FC } from 'react';
import styled from 'styled-components';

const ErrorMessage: FC<ErrorMessageProps> = (props) => {
  return <Root>{props.children}</Root>;
};

export default ErrorMessage;

interface ErrorMessageProps {
  children: string;
}
const Root = styled.div`
  width: 100%;
  font-size: 14px;
  color: #f46666;
  margin-top: 4px;
`;
