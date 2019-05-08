import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CapeWashingService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/api/superheros');
  }
  getOne(id: string) {
    return this._http.get(`/api/superheros/${id}`);
  }
  addHero(data: any) {
    return this._http.post('/api/superheros', data);
  }

  editHero(data: any) {
    return this._http.put(`/api/superheros/${data._id}`, data);
  }

  deleteHero(id: string) { return this._http.delete(`/api/superheros/${id}`); }

}
