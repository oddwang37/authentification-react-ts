import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FormContainer, Input, Button} from '../components';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <Root>
      <FormContainer title="Авторизация">
        <form onSubmit={onSubmit}>
          <Input register={register} name="email" error={errors.email?.message} label="Электронная почта" placeholder="example@mail.ru"/>
          <Input register={register} name="password" error={errors.password?.message} label="Пароль" type="password" placeholder="Введите 8-значный пароль"/>
          <Button>Продолжить</Button>
        </form>
        <LinkWrapper>
          <div>Ещё нет аккаунта?</div>
          <StyledLink to="/signup">Зарегистрироваться</StyledLink>
        </LinkWrapper>
      </FormContainer>
    </Root>
  );
};

export default SignIn;

type FormData = {
  email: string;
  password: string;
};

export const Root = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 16px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  font-size: 14px;
`;
export const StyledLink = styled(Link)`
  color: #466efa;
  font-weight: 500;
`;
