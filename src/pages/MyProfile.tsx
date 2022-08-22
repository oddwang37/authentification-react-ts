import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { GlobalContainer, Banner } from '../components';
import { Pencil } from '../components/svg';
import { Accordion } from '../components';
import { RootState } from '../redux/store';

const MyProfile = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  return (
    <GlobalContainer>
      <>
        <section>
          <ProfileWrapper>
            <Heading>Мой профиль</Heading>
            <EditWrapper>
              <Pencil />
              <EditText>Редактировать</EditText>
            </EditWrapper>
          </ProfileWrapper>
          <InfoItems>
            <InfoItem>
              <InfoItemName>Имя</InfoItemName>
              <InfoItemValue>{userInfo?.name}</InfoItemValue>
            </InfoItem>
            <InfoItem>
              <InfoItemName>Фамилия</InfoItemName>
              <InfoItemValue>{userInfo?.surname}</InfoItemValue>
            </InfoItem>
            <InfoItem>
              <InfoItemName>Телефон</InfoItemName>
              <InfoItemValue>{userInfo?.phone}</InfoItemValue>
            </InfoItem>
            <InfoItem>
              <InfoItemName>Электронная почта</InfoItemName>
              <InfoItemValue>{userInfo?.email}</InfoItemValue>
            </InfoItem>
          </InfoItems>
        </section>
        <section>
          <Banner />
        </section>
        <FAQ>
          <SecondHeading>Часто задаваемые вопросы</SecondHeading>
          <QuestionsWrapper>
            <Accordion title="Подписываете ли вы соглашение о неразглашении?">А что это?</Accordion>
            <Accordion title="Сколько займет создание MVP?">
              Чтобы создать надежный продукт, вам необходимо создать его прототип, спроектировать,
              разработать и протестировать. На прохождение всех этих этапов у вас уйдет около 3
              месяцев.
            </Accordion>
            <Accordion title="Предоставляете ли вы маркетинговые услуги?">Да.🗿</Accordion>
            <Accordion title="Различается ли MVP от прототипов?">Нет.</Accordion>
          </QuestionsWrapper>
        </FAQ>
      </>
    </GlobalContainer>
  );
};

export default MyProfile;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  margin-top: 48px;
  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;
const Heading = styled.h1`
  font-size: 36px;
`;
const EditWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const EditText = styled.div`
  color: #466efa;
  font-weight: 500;
  @media (max-width: 576px) {
    display: none;
  }
`;
const InfoItems = styled.div`
  margin-top: 36px;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    padding-right: 60px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 24px 40px;
  }
`;
const InfoItem = styled.div`
  width: auto;
  display: inline-block;
`;
const InfoItemName = styled.div`
  color: #717583;
  font-size: 14px;

`;
const InfoItemValue = styled.div`
  font-weight: 500;
  margin-top: 6px;

`;
const FAQ = styled.section`
  margin-top: 72px;
  @media (max-width: 576px) {
    margin-top: 48px;
  }
`;
const SecondHeading = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;
const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 36px;
  margin-bottom: 36px;
`;
