import styled from 'styled-components';


import { Button } from './UI';
import {BannerIllustration} from './svg';


const Banner = () => {
  return (
    <Root>
      <Info>
        <Heading>Ваша продуктивность выросла!</Heading>
        <Text>За прошлую неделю вы выполнили 12 задач</Text>
        <ButtonWrap>
          <Button>Подробнее</Button>
        </ButtonWrap>
      </Info>
      <IllustrationWrapper>
        <BannerIllustration />
      </IllustrationWrapper>
    </Root>
  );
};

export default Banner;

const Root = styled.div`
  padding: 40px;
  width: 100%;
  height: 235px;
  border-radius: 32px;
  background-color: #f6f8ff;
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
  padding-right: 18%;
  @media (max-width: 768px) {
    padding-right: 28px;
  }
  @media (max-width: 576px) {
    margin-top: 48px;
    height: auto;
    flex-wrap: wrap;
    padding: 28px 16px 0 16px;
  }
`;
const Info = styled.div`
  @media (max-width: 576px) {
    width: 100%;
  }
`
const IllustrationWrapper = styled.div`
  @media (max-width: 576px) {
    margin: 48px auto 0 auto;
  }
`
const Heading = styled.div`
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 18px;
  }
`;
const Text = styled.div`
  font-weight: 500;
  margin-top: 12px;
  margin-bottom: 36px;
  @media (max-width: 576px) {
    font-weight: 400;
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 32px;
    text-align: center;
  }
`;

const ButtonWrap = styled.div`
  width: 275px;
  @media (max-width: 576px) {
    width: 100%;
  }
`
