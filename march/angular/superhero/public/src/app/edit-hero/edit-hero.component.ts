import { Component, OnInit } from '@angular/core';
import { CapeWashingService } from '../cape-washing.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent implements OnInit {
  url_id: string;
  hero: any = {
    _id: '',
    name: '',
    power: ''
  };

  errors: any = {
    name: '',
    power: ''
  };

  constructor(
    private capeService: CapeWashingService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.url_id = params['id'];
      this.capeService.getOne(this.url_id)
        .subscribe(data => {
          this.hero = data;
        });
    });
  }

  onEdit() {
    this.capeService.editHero(this.hero)
      .subscribe(data => {
        if (data[ 'errors' ]) {
          this.errors = data['errors'];
        } else {
          this._router.navigate(['']);
        }
      });
  }


}
