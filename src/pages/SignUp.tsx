import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useAppDispatch, RootState } from '../redux/store';
import { registerUser, loginUser } from '../redux/authSlice';
import { LeftArrow } from '../components/svg';

import { Input, FormContainer, Button } from '../components';
import { StyledLink } from './SignIn';

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
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({ mode: 'onChange' });
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

  const formStepBack = () => {
    setFormStep((step) => step - 1);
  }

  return (
    <Root>
      {formStep === 0 && (
        <FormStep>
          <FormContainer title="Регистрация">
            <SForm onSubmit={onSubmit}>
              <Input
                register={register}
                name="email"
                error={errors.email?.message}
                label="Электронная почта"
                placeholder="example@mail.ru"
                rules={{
                  required: 'Необходимо ввести e-mail',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Неправильный email',
                  },
                }}
                isValid={isValid}
              />
              <Input
                register={register}
                name="password"
                error={errors.password?.message}
                label="Пароль"
                placeholder="Введите пароль"
                isTypePassword={true}
                rules={{
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
                    message:
                      'Пароль должен состоять минимум из 6-ти символов и содержать минимум одну цифрц и одну букву верхнего и нижнего регистров',
                  },
                  required: 'Необходимо ввести пароль',
                }}
                isValid={isValid}
              />
              <Input
                register={register}
                name="repeatPassword"
                error={errors.repeatPassword?.message}
                label="Повтор пароля"
                placeholder="Повторите пароль"
                isTypePassword={true}
                rules={{
                  validate: (val: string) => {
                    if (watch('password') !== val) {
                      return "Пароли не совпадают";
                    }
                  },
                }}
                isValid={isValid}
              />
              <Button type="button" inactive={!isValid || !isDirty} onClick={completeFormStep}>Продолжить</Button>
            </SForm>
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
            <SForm onSubmit={onSubmit}>
              <Input
                register={register}
                name="name"
                error={errors.name?.message}
                label="Имя"
                placeholder="Введите имя"
                rules={{ required: 'Введите имя' }}
                isValid={isValid}
              />
              <Input
                register={register}
                name="surname"
                error={errors.surname?.message}
                label="Фамилия"
                placeholder="Введите фамилию"
                rules={{ required: 'Введите фамилию' }}
                isValid={isValid}
              />
              <Input
                register={register}
                name="phone"
                error={errors.phone?.message}
                label="Телефон"
                placeholder="+7 (333)-333-33-33"
                rules={{ required: 'Введите номер телефона' }}
                isValid={isValid}
              />
              <Button type="submit" onClick={onSubmit} inactive={!isValid}>Продолжить</Button>
            </SForm>
            <Back onClick={formStepBack}>
              <LeftArrow />
              <BackText>Назад</BackText>
            </Back>
          </FormContainer>
        </FormStep>
      )}
    </Root>
  );
};

export default SignUp;

export const Root = styled.div`
  max-height: 90vh;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    max-height: none;
    padding-top: 56px;
    padding-bottom: 50px;
  }
  @media (max-width: 576px) {
    padding-top: 50px;
  }
`;


const FormStep = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SForm = styled.div`
  width: 100%;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 36px;
  font-size: 14px;
`;

const Back = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 40px;
  left: 152px;
  cursor: pointer;
  align-items: center;
  @media (max-width: 576px) {
    left: 16px;
    top: 20px;
  }
  @media (max-width: 768px) {
    left: 32px;
    top: 30px;
  }
`
const BackText = styled.div`
  color: #6f7488;
  font-size: 14px;
  font-weight: 500;
`