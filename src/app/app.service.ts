import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AppService {
  constructor(private _http: Http) {}

  getPokemonData() {
    return this._http.get('https://raw.githubusercontent.com/Biuni/PokemonGOPokedex/master/pokedex.json')
      .map((res) => res.json());
  }
}