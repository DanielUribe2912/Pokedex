import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeApi';
import { Pokemon } from '../interfaces/pokemon';
import { GLOBAL } from './GLOBAL';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public url;

  constructor() { this.url = GLOBAL.url }

  async getByPage(page: number, size: number = 400): Promise<Resultado[]> {
    if (page > 5) return [];
    const offset = size * (page - 1);
    const res = await fetch(this.url + `/?limit=${size}&offset=${offset}`);
    const resJson = await res.json();
    if (resJson.results.length > 0) return resJson.results
    return [];
  }

  async getById(id: string): Promise<Pokemon> {
    const res = await fetch(this.url + `/${id}`);
    return await res.json();
  }

  async getDescripcion(id: string | number): Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto: any) => texto.language.name === "es")
    return texto.flavor_text;
  }

}
