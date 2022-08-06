import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Input, FormContainer, Button } from '../components';
import { StyledLink, Root } from './SignIn';

type FormData = {
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <Root>
      <FormContainer title="Регистрация">
        <form onSubmit={onSubmit}>
          <Input register={register} name="email" error={errors.email?.message} label="Электронная почта" placeholder="example@mail.ru"/>
          <Input register={register} name="password" error={errors.email?.message} label="Пароль" placeholder="Введите пароль" />
          <Input register={register} name="repeatPassword" error={errors.email?.message} label="Повтор пароля" placeholder="Повторите пароль"/>
          <Button>Продолжить</Button>
        </form>
        <LinkWrapper>
          <div>Уже есть аккаунт?</div>
          <StyledLink to="/">Войти</StyledLink>
        </LinkWrapper>
      </FormContainer>
    </Root>
  );
}

export default SignUp;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 36px;
  font-size: 14px;
`



