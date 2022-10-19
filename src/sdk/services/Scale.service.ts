import { Scale } from '../models/Scale';
import Service from '../Service';

class ScaleService extends Service {
  static getScales() {
    return this.Http.get<Scale[]>('/scales').then(this.getData);
  }
}

export default ScaleService;
