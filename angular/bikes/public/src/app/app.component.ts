import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Bikes';
  bikes: any = [];

  updateInfo = {
    id: String,
    name: String,
    make: String,
    price: Number,
    max_speed: Number,
    miles: Number
  };

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getAllBikes();
  }

  getAllBikes() {
    this._http.getAll().subscribe(data => {
      this.bikes = data;
      console.log(this.bikes);
    });
  }

  updateBike(bike) {
    this.updateInfo.id = bike._id;
    this.updateInfo.name = bike.name;
    this.updateInfo.make = bike.make;
    this.updateInfo.price = bike.price;
    this.updateInfo.max_speed = bike.max_speed;
    this.updateInfo.miles = bike.miles;
  }

}
