import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.allBikes();
    // this.oneBike(id);
    // this.createBike(newBike);
  }


  allBikes() { return this._http.get('/bikes'); }
  oneBike(id) { return this._http.get('/bikes' + id); }
  createBike(newBike) { return this._http.post('/bikes', newBike); }

  // allBikes() {
  //   const bikes = this._http.get('/bikes');
  //   return bikes.subscribe(data => console.log('Got our bikes', data));
  // }

  // oneBike(id) {
  //   const bike = this._http.get('/bikes/' + id);
  //   bike.subscribe(data => console.log('Got single bike', data));
  //   return bike;
  // }

  // createBike(newBike) {
  //   const bike = this._http.post('/bikes/', newBike);
  //   return bike.subscribe(data => console.log('Created single bike', data));
  // }


}
