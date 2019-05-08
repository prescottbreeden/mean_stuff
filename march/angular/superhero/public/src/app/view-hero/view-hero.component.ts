import { Component, OnInit } from '@angular/core';
import { CapeWashingService } from '../cape-washing.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Hero, MapHero } from '../interfaces/hero';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.component.html',
  styleUrls: ['./view-hero.component.scss']
})
export class ViewHeroComponent implements OnInit {
  url_id: string;
  hero: Hero;

  constructor(
    private capeService: CapeWashingService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.url_id = params['id'];
      this.capeService.getOne(this.url_id)
        .subscribe(data => this.hero = MapHero(data));
    });
  }

}
