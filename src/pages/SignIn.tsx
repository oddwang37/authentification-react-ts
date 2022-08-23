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
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  useEffect(() => {
    if (isAuth) {
      navigate('/', { replace: true });
    }
  }, [isAuth]);
  const onSubmit = handleSubmit((data) => {
    toast.info('Авторизуемся...');
    dispatch(loginUser(data))
      .unwrap()
      .then((res) => {
        const { accessToken } = res;
        const { userId } = JSON.parse(window.atob(accessToken.split('.')[1]));
        dispatch(getUserInfo(userId));
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
            isTypePassword={true}
            placeholder="Введите 8-значный пароль"
            rules={{
              required: 'Необходимо ввести пароль',
              minLength: { value: 6, message: 'Пароль должен состоять минимум из 6 символов' },
            }}
            isValid={isValid}
          />
          <Button inactive={!isValid}>Продолжить</Button>
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
  min-height: 95%;
  display: flex;
  justify-content: center;
  padding-top: 4%;
  @media (max-width: 768px) {
    padding-top: 56px;
    padding-bottom: 50px;
  }
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
