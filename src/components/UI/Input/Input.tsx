import { FC, InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

const Input: FC<InputProps> = ({ register, rules, name, error, label, ...rest }) => {
  return (
    <Root>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field {...register(name, rules)} {...rest} error={error} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Root>
  );
};

export default Input;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  rules?: Object;
  label?: string;
  error?: string;
  register: RegisterType;
}

interface InputStyledProps {
  error?: string;
}

type RegisterType = UseFormRegister<FieldValues>;

const Root = styled.div`
  margin-bottom: 28px;
`;
const Field = styled.input<InputStyledProps>`
  width: 280px;
  height: 48px;
  background-color: #f2f3f4;
  border: ${(p) => (p.error ? '1px solid #f46666' : 'none')};
  border-radius: 12px;
  padding: 14px 20px;
  font-family: 'Gilroy';
  margin-bottom: ${(p) => (p.error ? 10 : 6)};
  &::placeholder {
    color: #717583;
  }
  margin-top: 10px;
`;
const Label = styled.label`
  font-size: 12px;
  line-height: 16px;
`;
