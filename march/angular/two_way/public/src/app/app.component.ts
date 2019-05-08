import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  heros: any = [];
  superHero = {
    name: '',
    power: ''
  };

  constructor(private kittens: HttpService) {}

  ngOnInit() {
    this.getAllHeros();
  }

  getAllHeros() {
    this.kittens.getAll()
      .subscribe(results => this.heros = results);
  }

  makeHero() {
    this.kittens.createNew(this.superHero)
      .subscribe(data => {
        this.getAllHeros();
        this.superHero = {name: '', power: ''};
      });
  }
}
