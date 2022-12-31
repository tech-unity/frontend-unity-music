import { Instrument } from './Instrument';
import { Person } from './Person';

export interface Scale {
  band: Band[];
  singers: Person[];
  date: Date;
  musics: Song[];
}

export interface Band {
  id: string;
  instrument: Instrument;
  person: Person;
}

export interface Song {
  id: string;
  name: string;
  src: string;
}
