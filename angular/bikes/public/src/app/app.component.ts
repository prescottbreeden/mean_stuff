import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Why...';
  bikes: any = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getAllBikes();
  }

  getAllBikes() {
    this._http.allBikes().subscribe(data => {
      this.bikes = data;
      console.log(this.bikes);
    });
  }

  // getAllBikes() {
  //   this.bikes = this._http.allBikes();
  // }

}
