import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http: HttpClient= inject(HttpClient)
  private apiUrl = environment.app.apiUrl002;

  header = new HttpHeaders().set('Content-Type', 'application/json')

    constructor() { }

    get(){
      return this.http.get<Comment[]>(this.apiUrl + '/product',{headers: this.header })
    }
}
