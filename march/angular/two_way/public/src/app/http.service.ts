import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/api/superheros');
  }

  createNew(data: any) {
    return this._http.post('/api/superheros', data);
  }
}
