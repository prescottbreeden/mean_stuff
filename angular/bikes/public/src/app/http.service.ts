import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAll() { return this._http.get('/bikes'); }
  getOne(id) { return this._http.get('/bikes/' + id); }
  create(object) { return this._http.post('/bikes', object); }
  update(id, object) { return this._http.put('/bikes/' + id, object); }
  delete(id) { return this._http.delete('/bikes/' + id); }

}
