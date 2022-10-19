export interface Person {
  id: string;
  name: string;
  email: string;
  phone?: string;
  gender: 'M' | 'F';
  isMinister: boolean;
}
