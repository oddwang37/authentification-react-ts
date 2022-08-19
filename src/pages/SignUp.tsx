import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useAppDispatch, RootState } from '../redux/store';
import { registerUser, loginUser } from '../redux/authSlice';

import { Input, FormContainer, Button } from '../components';
import { StyledLink, Root } from './SignIn';

type FormData = {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  surname: string;
  phone: string;
};

const SignUp = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const [formStep, setFormStep] = useState<number>(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth]);

  const onSubmit = handleSubmit((data) => {
    toast.info('Регистрируем нового пользователя');
    const { email, password, name, surname, phone } = data;
    dispatch(registerUser({ email, password, name, surname, phone }))
      .unwrap()
      .then((res) => {
        dispatch(loginUser({ email, password }));
      })
      .then(() => {
        toast.success('Вы успешно зарегистрировались!');
      })
      .catch(() => {
        toast.error('Ошибка регистрации! Пожалуйста, попробуйте позже');
      });
  });

  const completeFormStep = () => {
    setFormStep((step) => step + 1);
  };

  return (
    <Root>
      {formStep === 0 && (
        <FormStep>
          <FormContainer title="Регистрация">
            <form onSubmit={onSubmit}>
              <Input
                register={register}
                name="email"
                error={errors.email?.message}
                label="Электронная почта"
                placeholder="example@mail.ru"
              />
              <Input
                register={register}
                name="password"
                error={errors.password?.message}
                label="Пароль"
                placeholder="Введите пароль"
                type="password"
              />
              <Input
                register={register}
                name="repeatPassword"
                error={errors.repeatPassword?.message}
                label="Повтор пароля"
                placeholder="Повторите пароль"
                type="password"
              />
              <Button onClick={completeFormStep}>Продолжить</Button>
            </form>
            <LinkWrapper>
              <div>Уже есть аккаунт?</div>
              <StyledLink to="/signin">Войти</StyledLink>
            </LinkWrapper>
          </FormContainer>
        </FormStep>
      )}
      {formStep === 1 && (
        <FormStep>
          <FormContainer title="Заполните данные о себе">
            <form onSubmit={onSubmit}>
              <Input
                register={register}
                name="name"
                error={errors.name?.message}
                label="Имя"
                placeholder="Введите имя"
              />
              <Input
                register={register}
                name="surname"
                error={errors.surname?.message}
                label="Фамилия"
                placeholder="Введите фамилию"
              />
              <Input
                register={register}
                name="phone"
                error={errors.phone?.message}
                label="Телефон"
                placeholder="+7 (333)-333-33-33"
              />
              <Button>Продолжить</Button>
            </form>
          </FormContainer>
        </FormStep>
      )}
    </Root>
  );
};

export default SignUp;

const FormStep = styled.div``;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 36px;
  font-size: 14px;
`;
