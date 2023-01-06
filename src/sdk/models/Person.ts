import { Instrument } from "./Instrument";
import { Gender } from "./_gender";

export interface Person {
  id: string;
  name: string;
  email: string;
  phone?: string;
  gender: Gender;
  isMinister: boolean;
  instruments: Instrument[];
}
