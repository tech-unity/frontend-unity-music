import { Song } from '../models/Scale';
import Service from '../Service';

interface NewSongDTO {
  name: string;
}

class SongsService extends Service {
  static getSongs() {
    return this.Http.get<Song[]>('/musics').then(this.getData);
  }
  
  static insertNewSong(song: NewSongDTO) {
    return this.Http.post('/musics', song).then(this.getData);
  }
}

export default SongsService;
