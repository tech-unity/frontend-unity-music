import { Instrument } from "./Instrument";
import { Person } from "./Person";

export interface Scale {
  band: Band[];
  singers: Person[];
  date: Date;
}

export interface Band {
  id: string;
  instrument: Instrument;
  person: Person;
}

