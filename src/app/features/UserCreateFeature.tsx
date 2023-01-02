import styled from 'styled-components';
import CustomCheckbox from '../components/checkbox/Checkbox';
import Input from '../components/input/Input';
import CustomSelect from '../components/select/Select';

export default function UserCreateFeature() {
  const genderOptions = [
    { label: 'M', value: 'Masculino' },
    { label: 'F', value: 'Feminino' },
  ];
  return (
    <Wrapper>
      <Heading>Cadastrar pessoas</Heading>
      <Container>
        <Column>
          <Input label='Nome'></Input>
          <Input label='Email'></Input>
          <Input label='Telefone'></Input>
        </Column>
        <Column>
          <CustomSelect
            label='Gênero'
            placeholder='Selecione ...'
            options={genderOptions}
          ></CustomSelect>
          <CustomSelect
            label='Instrumentos'
            placeholder='Selecione ...'
            mode='multiple'
          ></CustomSelect>
          <CustomCheckbox label='Ministro'></CustomCheckbox>
        </Column>
      </Container>
    </Wrapper>
  );
}

const Heading = styled.h1``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;

  gap: 24px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

`;

const Container = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  gap: 23px;
  column-gap: 500px;
`;
