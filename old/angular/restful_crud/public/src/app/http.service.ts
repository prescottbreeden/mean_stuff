import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllTasks() {
    return this._http.get('/api/tasks');
  }

  getOneTask(id: string) {
    return this._http.get('/api/tasks/' + id);
  }

  createTask(newTask) {
    return this._http.post('/api/tasks', newTask);
  }

  editTask(id: string, editedTask) {
    return this._http.put('/api/tasks/' + id, editedTask);
  }

  deleteTask(id: string) {
    return this._http.delete('/api/tasks/' + id);
  }
}
