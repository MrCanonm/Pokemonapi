import { Component, OnInit } from '@angular/core';
import { PokemonServicesService } from './pokemon-services.service';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.page.html',
  styleUrls: ['./pokemon-api.page.scss'],
})
export class PokemonApiPage implements OnInit {

  pokemons: any[] = [];

  constructor(private pokemonservice: PokemonServicesService) { }

  ngOnInit() {
    this.getDataApiPokemon();
  }

  getDataApiPokemon(){
    this.pokemonservice.getPokemonData().subscribe((results)=>{
     this.pokemons = results.results;
     console.log(this.pokemons)
    })
  }
}

