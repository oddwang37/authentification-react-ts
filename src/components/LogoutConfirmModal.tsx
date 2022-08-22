import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { logoutUser } from '../redux/authSlice';
import { useAppDispatch } from '../redux/store';
import Overlay from './UI/Overlay';

const LogoutConfirmModal: FC<PropsType> = ({ changeModalIsOpen, isOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const closeModal = () => changeModalIsOpen(false);

  const onConfirm = () => {
    toast.info('Выходим...');
    try {
      dispatch(logoutUser());
      navigate('/signin', { replace: true });
      closeModal();
      toast.success('Вы успешно вышли из профиля!');
    } catch (error) {
      closeModal();
      toast.error('Выйти не удалось :( Пожалуйста, попробуйте позже');
    }
    closeModal();
  };

  return (
    <Overlay isVisible={isOpen}>
      <Root>
        <Label>Вы уверены что хотите выйти из аккаунта?</Label>
        <Wrapper>
          <Button filled={false} onClick={closeModal}>
            Отмена
          </Button>
          <Button filled={true} onClick={onConfirm}>
            Выйти
          </Button>
        </Wrapper>
        <Close onClick={closeModal}>&times;</Close>
      </Root>
    </Overlay>
  );
};

export default LogoutConfirmModal;

type PropsType = {
  changeModalIsOpen: (value: boolean) => void;
  isOpen: boolean;
};

const Root = styled.div`
  background-color: #fff;
  padding: 32px 24px;
  border-radius: 24px;
  width: 332px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 36px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
type ButtonProps = {
  filled: boolean;
};
const Button = styled.button<ButtonProps>`
  width: 45%;
  background-color: ${(p) => (p.filled ? '#466efa' : '#dae2ff')};
  color: ${(p) => (p.filled ? '#fff' : '#466efa')};
  font-weight: 500;
  font-family: Gilroy;
  border-radius: 12px;
  padding: 14px 0;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(p) => (p.filled ? '#dae2ff' : '#466efa')};
    color: ${(p) => (p.filled ? '#466efa' : '#fff')};
    outline: ${(p) => (p.filled ? '2px solid #466efa' : 'none')};
  }
  @media (max-width: 576px) {
  &:hover
    background-color: ${(p) => (p.filled ? '#466efa' : '#dae2ff')};
    color: ${(p) => (p.filled ? '#fff' : '#466efa')};
    outline: none;
  }
`;

const Close = styled.div`
  color: #cacdd7;
  position: absolute;
  font-size: 30px;
  line-height: 1em;
  cursor: pointer;
  top: 20px;
  right: 20px;
  &:hover {
    color: #696a70;
  }
`;
