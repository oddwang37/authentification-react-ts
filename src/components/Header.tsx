import { FC } from 'react';
import styled from 'styled-components';
import { Logout as LogoutImg } from './svg';
import LogoImgSrc from '../assets/img/logo.png';

const Header: FC<HeaderProps> = ({ username }) => {
  return (
    <Root>
      <Logo>
        <LogoImg src={LogoImgSrc} alt="purrweb logo with two purple slashes" />
        <LogoText>Purrweb</LogoText>
      </Logo>
      {username && (
        <UserWrapper>
          <Username>{username}</Username>
          <Logout>
            <LogoutImg />
            <LogoutText>Выйти</LogoutText>
          </Logout>
        </UserWrapper>
      )}
    </Root>
  );
};

export default Header;

interface HeaderProps {
  username?: string;
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 20px 120px;
  border-bottom: 1px solid #efefef;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  gap: 2px;
`;
const LogoText = styled.div`
  font-size: 22px;
  font-weight: 500;
`;
const LogoImg = styled.img`
  margin-top: 6px;
`;
const UserWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const Username = styled.div`
  font-weight: 500;
`;
const Logout = styled.div`
  display: flex;
  gap: 8px;
`;
const LogoutText = styled.div`
  color: #466efa;
  font-weight: 500;
  font-size: 14px;
`;
