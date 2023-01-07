import { Band, Scale } from '../models/Scale';
import Service from '../Service';

interface NewScaleDTO {
  band: Band[];
  singers: string[];
  date: Date;
  musics: string[];
}

class ScaleService extends Service {
  static getScales() {
    return this.Http.get<Scale[]>('/scales').then(this.getData);
  }

  static insertNewScale(person: NewScaleDTO) {
    return this.Http.post('/scales', person).then(this.getData);
  }
}

export default ScaleService;
