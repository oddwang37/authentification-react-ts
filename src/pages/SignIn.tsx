import { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../redux/store';
import { RootState } from '../redux/store';
import { loginUser, getUserInfo } from '../redux/authSlice';

import { FormContainer, Input, Button } from '../components';

const SignIn = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth]);
  const onSubmit = handleSubmit((data) => {
    toast.info('Авторизуемся...');
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        // Получаем информаицю о пользователе с помощью id из localStorage,
        // поскольку login возвращает только токены
        const id = localStorage.getItem('id');
        if (id) {
          dispatch(getUserInfo(id));
        }
      })
      .then(() => {
        navigate('/', { replace: true });
        toast.success('Вы успешно авторизовались!');
      })
      .catch(() => toast.error('Ошибка авторизации :('));
  });

  return (
    <Root>
      <FormContainer title="Авторизация">
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
            type="password"
            placeholder="Введите 8-значный пароль"
          />
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
