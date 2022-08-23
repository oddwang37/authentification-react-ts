import { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';
import { EyeClosed, EyeOpened, InputError, InputSuccess } from '../../svg';

const Input: FC<InputProps> = ({
  register,
  rules,
  name,
  error,
  label,
  isTypePassword = false,
  isValid,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  useEffect(() => {
    if (isTypePassword) setIsVisible(false);
  }, [isTypePassword]);

  const onShowClick = () => {
    setIsVisible(true);
  };
  const onHideClick = () => {
    setIsVisible(false);
  };

  return (
    <Root error={error}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Field
        {...register(name, rules)}
        {...rest}
        error={error}
        isValid={isValid}
        type={isVisible ? 'text' : 'password'}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <IconsWrapper>
        {isTypePassword ? (
          isVisible ? (
            <EyeOpened onClick={onHideClick} />
          ) : (
            <EyeClosed onClick={onShowClick} />
          )
        ) : null}
        {error ? <InputError /> : isValid ? <InputSuccess /> : null}
      </IconsWrapper>
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
  isTypePassword?: boolean;
  isValid: boolean;
}

interface InputStyledProps {
  error?: string;
  isValid?: boolean;
}

type RegisterType = UseFormRegister<FieldValues>;

const Root = styled.div<InputStyledProps>`
  margin-bottom: ${(p) => (p.error ? '4px' : '28px')};
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const IconsWrapper = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 18px;
  right: 20px;
  cursor: pointer;
  align-items: center;
  height: 48px;
`;
const Field = styled.input<InputStyledProps>`
  width: 100%;
  height: 48px;
  background-color: #f2f3f4;
  border: ${(p) => (p.error ? '1px solid #f46666' : p.isValid ? '1px solid #17bc77' : 'none')};
  border-radius: 12px;
  padding: 14px 20px;
  font-family: 'Gilroy';
  margin-bottom: ${(p) => (p.error ? 10 : 6)};
  margin-top: 4px;
  display: block;
  &::placeholder {
    color: #717583;
  }
  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;
const Label = styled.label`
  font-size: 12px;
`;
