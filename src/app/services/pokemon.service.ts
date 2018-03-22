import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon.interface';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx'; // para el map

@Injectable()
export class PokemonService {
  pokedexURL = 'https://pokeapi-7ed56.firebaseio.com/pokemon.json';
  pokemonUrL = 'https://pokeapi-7ed56.firebaseio.com/pokemon/';

  constructor(private http: Http) { }
  nuevoPokemon(pokemon: Pokemon) {
    const body = JSON.stringify(pokemon);
    const headers = new Headers({
      'Content-Type': 'apllication/json'
    });
    return this.http.post(this.pokedexURL, body,  {headers: headers}).map(
      res => {
        console.log(res.json());
       return  res.json();
      });
  }
  consultarPokedex() {
    return this.http.get(this.pokedexURL)
      .map(
        resultado => {
          return resultado.json();
        }
      );
  }
  getPokemon(indice: string) {
    const url = `${this.pokemonUrL}/${indice}.json`;
   // console.log(url);
    return this.http.get(url)
      .map(
        resultado => {
          return resultado.json();
        }
      );
  }
  editarPokemon(pokemon: Pokemon, id: string) {
    const body = JSON.stringify(pokemon);
    const headers = new Headers({
      'Content-Type': 'apllication/json'
    });
    const url = `${this.pokemonUrL}/${id}.json`;
    return this.http.put(url, body, {headers: headers})
      .map(
        resultado => {
          return resultado.json();
        }
      );
  }
  eliminarPokemon(id: string) {
    const url = `${this.pokemonUrL}/${id}.json`;
    return this.http.delete(url)
      .map(
        resultado => {
          return resultado.json();
        }
      );
  }
}
