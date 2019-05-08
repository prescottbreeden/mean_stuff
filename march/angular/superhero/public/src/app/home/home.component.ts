import { Component, OnInit } from '@angular/core';
import { CapeWashingService } from '../cape-washing.service';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private capeService: CapeWashingService) { }

  ngOnInit() {
    this.getAllBozos();
  }

  getAllBozos() {
    this.capeService.getAll()
      .subscribe(data => this.heroes = data);
  }

  deleteMe(id: string) {
    this.capeService.deleteHero(id).subscribe(() => {
      this.getAllBozos();
    });
  }

}
