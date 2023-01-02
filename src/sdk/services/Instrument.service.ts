import { Instrument } from '../models/Instrument';
import Service from '../Service';

class InstrumentService extends Service {
  static getInstruments() {
    return this.Http.get<Instrument[]>('/instruments').then(this.getData);
  }
}

export default InstrumentService;
