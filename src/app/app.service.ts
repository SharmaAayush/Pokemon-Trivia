import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";

@Injectable()
export class AppService implements OnInit {
  weaknesses = [];

  constructor(private _http: Http) {}

  ngOnInit() {
  }

  getPokemonData() {
    return this._http.get('https://raw.githubusercontent.com/Biuni/PokemonGOPokedex/master/pokedex.json')
      .map((res) => res.json());
  }

  addWeakness(weaknessName: string) {
    var num = this.weaknesses.findIndex((weakness) => {
      return weakness.name === weaknessName;
    });

    if(num == -1) {
      this.weaknesses.push({name: weaknessName, number_of_pokemons: 1});
    } else {
      this.weaknesses[num].number_of_pokemons++;
    }
  }

  getWeakness(weaknessName: string) {
    return this.weaknesses.find((weakness) => {
      return weakness.name ===weaknessName;
    });
  }
}