import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {

private readonly http: HttpClient= inject(HttpClient)
private apiUrl = environment.app.apiUrl;

header = new HttpHeaders().set('Content-Type', 'application/json')

  constructor() { }

  getPost(){
    return this.http.get<Post[]>(this.apiUrl + '/posts',{headers: this.header })
  }

}
