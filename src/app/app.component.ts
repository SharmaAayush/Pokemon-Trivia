import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'Pokemon Trivia';
  pokemon_data = [];
  top_ten_pokemon = [];
  weaknesses = [];

  constructor(private _appService: AppService) {}

  ngOnInit() {
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
          })
        })
        console.log(this.pokemon_data);
        console.log(this.top_ten_pokemon);
        console.log(this.weaknesses);
      })
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
