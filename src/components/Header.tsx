import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../redux/store';
import { Logout as LogoutImg } from './svg';
import LogoImgSrc from '../assets/img/logo.png';

import LogoutConfirmModal from './LogoutConfirmModal';

const Header = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const changeModalIsOpen = (value: boolean) => {
    setModalIsOpen(value);
  };

  return (
    <Root>
      <Link to="/">
        <Logo>
          <LogoImg src={LogoImgSrc} alt="purrweb logo with two purple slashes" />
          <LogoText isAuth={isAuth}>Purrweb</LogoText>
        </Logo>
      </Link>
      {isAuth && userInfo && (
        <UserWrapper>
          <Username>
            {userInfo.name} {userInfo.surname}
          </Username>
          <Logout onClick={() => changeModalIsOpen(true)}>
            <LogoutImg />
            <LogoutText>Выйти</LogoutText>
          </Logout>
        </UserWrapper>
      )}
      <LogoutConfirmModal changeModalIsOpen={changeModalIsOpen} isOpen={modalIsOpen} />
    </Root>
  );
};

export default Header;

type LogoTextProps = {
  isAuth: boolean;
};

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;
  border-bottom: 1px solid #efefef;
  height: 80px;
  @media (max-width: 992px) {
    padding: 0 32px;
  }
  @media (max-width: 576px) {
    padding: 0 16px;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  gap: 2px;
  @media (max-width: 576px) {
    width: auto;
  }
`;
const LogoText = styled.div<LogoTextProps>`
  font-size: 22px;
  font-weight: 500;
  @media (max-width: 576px) {
    display: ${(p) => (p.isAuth ? 'none' : 'block')};
  }
`;
const LogoImg = styled.img`
  margin-top: 6px;
`;
const UserWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Username = styled.div`
  font-weight: 500;
`;
const Logout = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;
const LogoutText = styled.div`
  color: #466efa;
  font-weight: 500;
  font-size: 14px;
`;
