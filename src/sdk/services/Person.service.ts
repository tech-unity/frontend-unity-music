import { Person } from '../models/Person';
import { Gender } from '../models/_gender';
import Service from '../Service';

interface NewPersonDTO {
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  isMinister: boolean;
  instruments: string[];
}

class PersonService extends Service {
  static getPeople() {
    return this.Http.get<Person[]>('/people').then(this.getData);
  }

  static insertNewPerson(person: NewPersonDTO) {
    return this.Http.post<Person[]>('/people', person).then(this.getData);
  }
}

export default PersonService;
