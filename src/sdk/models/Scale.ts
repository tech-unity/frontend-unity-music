export interface Scale {
  band: Band;
  singers: Singers;
  date: Date;
}

export interface Band {
  name: string;
  instrument: string;
}

export interface Singers {
  name: string;
}
