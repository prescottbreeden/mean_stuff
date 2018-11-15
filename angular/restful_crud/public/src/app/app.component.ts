import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newTask: any;
  editTask: any;
  edit: boolean;
  tasks: any = [];
  errors: any = [];

  constructor (private _httpService: HttpService) {
    this.newTask = {
      title: '',
      description: ''
    };
    this.editTask = {
      id: '',
      title: '',
      description: ''
    };
    this.edit = false;
  }

  ngOnInit() {
    this._httpService.getAllTasks().subscribe( data => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  onSubmit() {
    this._httpService.createTask(this.newTask).subscribe( data => {
      console.log(data);
    });
  }
  deleteButton(task) {
    this._httpService.deleteTask(task._id).subscribe( data => {
      console.log(data);
    });
  }

  editButton(task) {
    if (!this.edit) { this.edit = !this.edit; }
    this.editTask.id = task._id;
    this.editTask.title = task.title;
    this.editTask.description = task.description;
  }

  onEdit() {
    if (this.editTask.title.length < 3) {
      this.errors.push('title must be 3 chars');
      return;
    }
    this._httpService.editTask(this.editTask.id, this.editTask)
      .subscribe( data => {
        console.log(data);
      });
  }


}
