import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pokemon_data;
  pokemon;

  constructor(private _appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._appService.getPokemonData().subscribe((res) => {
      this.pokemon_data = res.pokemon;
      this.route.params.subscribe(
        (params: Params) => {
          this.pokemon = this.pokemon_data.find(function(pokemon) {
            return pokemon.num === params['num'];
          });
        }
      );
    });
  }

  getWeakness(weaknessName: string) {
    return this._appService.getWeakness(weaknessName).number_of_pokemons;
  }

  getImgUrl(num: string) {
    return this.pokemon_data.find(function(pokemon) {
      return pokemon.num === num;
    }).img;
  }
}
