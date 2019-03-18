import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  name = 'b0b';

  constructor(private http: HttpClient) { }

  getAllSuperHeroes() {
    return this.http.get('/api/superheros');
  }

  getOneSuperHero(id: any) {
    return this.http.get(`/api/superheros/${id}`);
  }

}
