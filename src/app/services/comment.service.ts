import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly http: HttpClient= inject(HttpClient)
  private apiUrl = environment.app.apiUrl;

  header = new HttpHeaders().set('Content-Type', 'application/json')

    constructor() { }

    get(){
      return this.http.get<Comment[]>(this.apiUrl + '/comments',{headers: this.header })
    }
}
