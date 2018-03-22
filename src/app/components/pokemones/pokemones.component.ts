import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  pokedex: Pokemon [] = [];
  constructor(private pokemonService: PokemonService) {
    this.pokemonService.consultarPokedex()
      .subscribe(
        resultado => {
          for(const keys$ in resultado ) {
            console.log(resultado[keys$]);
            const pokemonNuew = resultado[keys$];
            pokemonNuew.id = keys$;
            this.pokedex.push(pokemonNuew);
          }
        }
      );
  }

  ngOnInit() {
  }
  eliminarPokemon(id: string, indice: number) {
    this.pokemonService.eliminarPokemon(id)
      .subscribe(
        resultado => {
          this.pokedex.splice(indice, 1);
        }
      );
  }

}
