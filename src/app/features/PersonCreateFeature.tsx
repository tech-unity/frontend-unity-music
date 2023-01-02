import { useEffect, useState } from 'react';
import styled from 'styled-components';
import withBoundary from '../../core/hoc/withBoundary';
import useInstrument from '../../core/hooks/useInstrument';
import info from '../../core/utils/info';
import { Gender } from '../../sdk/models/_gender';
import PersonService from '../../sdk/services/Person.service';
import Button from '../components/button/Button';
import CustomCheckbox from '../components/checkbox/Checkbox';
import Input from '../components/input/Input';
import CustomSelect from '../components/select/Select';

function PersonCreateFeature() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState<Gender>('M');
  const [isMinister, setIsMinister] = useState(false);
  const [instruments, setInstruments] = useState<string[]>([]);

  async function insertPerson() {
    const newPerson = {
      name,
      email,
      phone,
      gender,
      isMinister,
      instruments,
    };

    console.log(newPerson)
    await PersonService.insertNewPerson(newPerson);

    info({
      title: 'Pessoa salva com sucesso',
      description: `Você acabou de criar uma pessoa`,
    });
  }

  const genderOptions = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
  ];

  const { dropdownInstruments, errorOnFetching, fetchInstruments } =
    useInstrument();

  useEffect(() => {
    fetchInstruments();
  }, [fetchInstruments]);

  if (errorOnFetching) throw errorOnFetching;

  return (
    <Wrapper>
      <Heading>Cadastrar pessoas</Heading>
      <Container>
        <Column>
          <Input
            label='Nome'
            onChange={e => setName(e.currentTarget.value)}
          ></Input>
          <Input
            label='Email'
            onChange={e => setEmail(e.currentTarget.value)}
          ></Input>
          <Input
            label='Telefone'
            onChange={e => setPhone(e.currentTarget.value)}
          ></Input>
        </Column>
        <Column>
          <CustomSelect
            label='Gênero'
            placeholder='Selecione ...'
            options={genderOptions}
            defaultValue='M'
            onSelect={e => setGender(e)}
          ></CustomSelect>
          <CustomSelect
            label='Instrumentos'
            placeholder='Selecione ...'
            mode='multiple'
            options={dropdownInstruments}
            onSelect={e => setInstruments([...instruments, e])}
            onDeselect={e =>
              setInstruments(instruments.filter(instrument => e !== instrument))
            }
          ></CustomSelect>
          <CustomCheckbox
            label='Ministro'
            onChange={e => setIsMinister(e.target.checked)}
          ></CustomCheckbox>
        </Column>
        <Button
          label='Enviar'
          variant='primary'
          style={{ marginTop: '100px' }}
          onClick={insertPerson}
        ></Button>
      </Container>
    </Wrapper>
  );
}

export default withBoundary(PersonCreateFeature, 'user create form');

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
