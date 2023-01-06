import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import withBoundary from '../../core/hoc/withBoundary';
import usePeople from '../../core/hooks/usePeople';
import useSong from '../../core/hooks/useSong';
import Button from '../components/button/Button';
import { CustomCalendar } from '../components/calendar/Calendar';
import CustomSelect from '../components/select/Select';

function ScaleCreateFeature() {
  const [date, setDate] = useState<Dayjs>(getNextSaturdayFromToday());
  const [band, setBand] = useState<string[]>([]);
  const [singers, setSingers] = useState<string[]>([]);
  const [musics, setMusics] = useState<string[]>([]);

  function getNextSaturdayFromToday() {
    const today = dayjs().day();
    return dayjs().add(6 - today, 'day');
  }

  async function insertScale() {
    const newScale = {
      date,
      band,
      singers,
      musics,
    };
    console.log(newScale);
    // await ScaleService.insertNewScale(newScale);

    // info({
    //   title: 'Escala salva com sucesso',
    //   description: `Você acabou de criar uma escala`,
    // });
  }

  const {
    dropdownBand,
    dropdownSingers,
    errorOnFetching: peopleFetchingError,
    fetchPeople,
  } = usePeople();

  const {
    dropdownMusics,
    fetchMusics,
    errorOnFetching: songsFetchingError,
  } = useSong();

  useEffect(() => {
    fetchPeople();
    fetchMusics();
  }, [fetchPeople, fetchMusics]);

  if (peopleFetchingError) throw peopleFetchingError;
  if (songsFetchingError) throw songsFetchingError;

  return (
    <>
      <Heading>Cadastrar escalas</Heading>
      <Container>
        <Fields>
          <CustomCalendar
            label='Data'
            onSelect={(date: Dayjs) => setDate(date)}
            value={date}
          ></CustomCalendar>
          <CustomSelect
            label='Banda'
            placeholder='Selecione ...'
            options={dropdownBand}
            mode='multiple'
            onSelect={e => setBand([...band, e])}
            onDeselect={e => setBand(band.filter(person => e !== person))}
          ></CustomSelect>
          <CustomSelect
            label='Vocal'
            placeholder='Selecione ...'
            mode='multiple'
            options={dropdownSingers}
            onSelect={e => setSingers([...singers, e])}
            onDeselect={e => setSingers(singers.filter(person => e !== person))}
          ></CustomSelect>
          <CustomSelect
            label='Músicas'
            placeholder='Selecione ...'
            mode='multiple'
            maxTagCount={2}
            options={dropdownMusics}
            onSelect={e => setMusics([...musics, e])}
            onDeselect={e => setMusics(musics.filter(music => e !== music))}
          ></CustomSelect>
        </Fields>
        <ButtonDiv>
          <Button
            label='Enviar'
            variant='primary'
            onClick={insertScale}
          ></Button>
        </ButtonDiv>
      </Container>
    </>
  );
}

export default withBoundary(ScaleCreateFeature, 'user create form');

const Heading = styled.h1``;

const Fields = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  flex: 1;

  gap: 24px;
  column-gap: 500px;
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
`;
