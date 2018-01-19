import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-pretty',
  templateUrl: './pretty.component.html',
  styleUrls: ['./pretty.component.css']
})
export class PrettyComponent implements OnInit {
  pokemon_data = [];
  top_ten_pokemon = [];
  weaknesses = [];

  constructor(private _router: Router, private _appService: AppService) { }

  ngOnInit() {
    this.weaknesses = this._appService.weaknesses;
    this._appService.getPokemonData()
      .subscribe((res) => {
        this.pokemon_data = res.pokemon.sort(function(a, b) {
          if(a.spawn_chance > b.spawn_chance) {
            return -1;
          } else if (b.spawn_chance > a.spawn_chance) {
            return 1;
          } else {
            return 0;
          }
        });
        this.top_ten_pokemon = this.pokemon_data.slice(0,10);
        this.pokemon_data.forEach((pokemon) => {
          pokemon.weaknesses.forEach((weakness) => {
            this.addWeakness(weakness);
          });
        });
      });
  }

  addWeakness(weaknessName: string) {
    this._appService.addWeakness(weaknessName);
  }

  getWeakness(weaknessName: string) {
    return this._appService.getWeakness(weaknessName);
  }

}
