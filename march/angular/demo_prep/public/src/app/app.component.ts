import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Most epic project ever!';
  heroes: any = [];
  superman: any = {};

  constructor(private _puppies: HttpService, private client: HttpClient) {

    const http = new HttpService(client);
    http.getAllSuperHeroes().subscribe();

    _puppies.getAllSuperHeroes()
      .subscribe(data => {
        this.heroes = data;
        console.log(data);
      });

    _puppies.getOneSuperHero('5c8bd002b8a4d82d08bec418')
      .subscribe(data => {
        this.superman = data;
      });
  }

}
