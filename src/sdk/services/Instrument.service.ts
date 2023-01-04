import { Instrument } from '../models/Instrument';
import Service from '../Service';

interface NewInstrumentDTO {
  name: string;
}

class InstrumentService extends Service {
  static getInstruments() {
    return this.Http.get<Instrument[]>('/instruments').then(this.getData);
  }
  
  static insertNewInstrument(instrument: NewInstrumentDTO) {
    return this.Http.post('/instruments', instrument).then(this.getData);
  }
}

export default InstrumentService;
