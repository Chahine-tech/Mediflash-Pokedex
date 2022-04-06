import { Injectable } from '@nestjs/common';

import axios from 'axios'

@Injectable()
export class PokemonService {

  async findAll(offset: number, limit: number) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    return Promise.all(data.results.map(
      async ({ url }) => {
        const pokemon = await axios.get(url)
        return pokemon.data
      }
    ))
   
  }

}