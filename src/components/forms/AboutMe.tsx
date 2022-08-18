import { FC } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import { FormContainer, Input } from '../UI';

const AboutMe: FC<AboutMeProps> = ({ register, errors }) => {
  return (
    <FormContainer title="Заполните данные о себе">
      <form>
        <Input
          register={register}
          name="firstname"
          error={errors.firstname?.message}
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
      </form>
    </FormContainer>
  );
};

export default AboutMe;

type AboutMeProps = {
  register: RegisterType;
  errors: {
    firstname: {
      message: string;
    };
    surname: {
      message: string;
    };
    phone: {
      message: string;
    };
  };
};

/* type RegisterType = UseFormRegister<{
  firstname?: string;
  surname?: string;
  phone?: string;
  email: string;
  password: string;
  repeatPassword?: string;
  name: string;
}>; */

type RegisterType = UseFormRegister<FieldValues>;
