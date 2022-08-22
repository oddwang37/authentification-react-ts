import styled from 'styled-components';
import Button from './UI/Button';

const Banner = () => {
  return (
    <Root>
      <Heading>Ваша продуктивность выросла!</Heading>
      <Text>За прошлую неделю вы выполнили 12 задач</Text>
      <Button>Подробнее</Button>
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
  @media (max-width: 576px) {
    margin-top: 48px;
    padding: 28px 16px 280px 16px;
    height: default;
  }
`;
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
  }
`;
