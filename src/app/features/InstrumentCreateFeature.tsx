import { useState } from 'react';
import styled from 'styled-components';
import withBoundary from '../../core/hoc/withBoundary';
import info from '../../core/utils/info';
import InstrumentService from '../../sdk/services/Instrument.service';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import { TABLET_WIDTH } from '../_constants';

function InstrumentCreateFeature() {
  const [name, setName] = useState('');

  async function insertInstrument() {
    const newInstrument = {
      name,
    };

    await InstrumentService.insertNewInstrument(newInstrument);

    info({
      title: 'Instrumento salvo com sucesso',
      description: `Você acabou de criar um instrumento`,
    });
  }

  return (
    <>
      <Heading>Cadastrar instrumentos</Heading>
      <Container>
        <Fields>
          <Input
            label='Nome'
            onChange={e => setName(e.currentTarget.value)}
          ></Input>
        </Fields>
        <ButtonDiv>
          <Button
            label='Enviar'
            variant='primary'
            onClick={insertInstrument}
          ></Button>
        </ButtonDiv>
      </Container>
    </>
  );
}

export default withBoundary(InstrumentCreateFeature, 'instrument create form');

const Heading = styled.h1``;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  flex: 1;

  gap: 24px;

  @media screen and (max-width: ${TABLET_WIDTH}px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  gap: 24px;
  column-gap: 500px;
`;
