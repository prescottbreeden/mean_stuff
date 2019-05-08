import { Component, OnInit } from '@angular/core';
import { CapeWashingService } from '../cape-washing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  hero: any = {
    name: '',
    power: ''
  };

  errors: any = {
    name: '',
    power: ''
  };

  constructor(
    private capeService: CapeWashingService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  followMeOnMySpace() {
    this.capeService.addHero(this.hero)
      .subscribe(results => {
        if (results['errors']) {
          this.errors = results['errors'];
        } else {
          this._router.navigate(['']);
        }
      });
  }

}
