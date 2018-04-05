import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import {PokemonService} from '../../services/pokemon.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  id: string;
  pokemon: Pokemon = {
    nombre: '',
    bio: '',
    url: 'https://www.fullclasificados.ec/oportunidades/images/frontend/no_image_383_291.png',
    tipo: '',
 }
  constructor(private  pokemonService: PokemonService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this.pokemonService.getPokemon(this.id)
            .subscribe(
              resultado => {
                this.pokemon = resultado;
              }
            );
        }
      }
    );
  }

  ngOnInit() {
  }
  guardar() {
    if (this.id == 'nuevo') {
      // console.log(this.pokemon);
      this.pokemonService.nuevoPokemon(this.pokemon)
        .subscribe(
          resultado => {
            this.router.navigate(['/pokemon', resultado.name]);
          }
        );
    } else {
      // console.log(this.pokemon);
      this.pokemonService.editarPokemon(this.pokemon, this.id)
        .subscribe(
          resultado => {
            this.router.navigate(['/pokedex']);
          }
        );
    }
  }
}
