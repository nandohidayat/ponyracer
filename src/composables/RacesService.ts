import { RaceModel } from '@/models/RaceModel';
import axios from 'axios';

export function useRaceService() {
  const prefix ='https://ponyracer.ninja-squad.com';
  return {
    async list(): Promise<Array<RaceModel>> {
      const response = await axios.get<Array<RaceModel>>(prefix+'/api/races',{params: {status:"PENDING"}});
      return response.data;
    }
  }
}
