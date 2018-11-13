import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();


  constructor(private _http: HttpClient) {}

  getPosts() {
    this._http
      .get<Post[]>('http://localhost:3000/api/posts')
      .subscribe(posts => {
        this.posts = posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    this._http.post('http://localhost:3000/api/posts', post)
      .subscribe(responseData => {
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      })
  }

  deletePost(id: string) {
    this._http.delete('http://localhost:3000/api/posts/' + id)
      .subscribe(() => {
        this.posts = this.posts.filter(post => post._id !== id)
        this.postsUpdated.next([...this.posts]);
      });
  }
}
