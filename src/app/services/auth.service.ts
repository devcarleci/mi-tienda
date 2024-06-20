import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { UserLogin } from '../models/user-login.model';
import { map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http: HttpClient= inject(HttpClient)
  private apiUrl = environment.app.apiUrl;


  header = new HttpHeaders().set('Content-Type', 'application/json')

  constructor() { }
  getLogin(request: UserLogin) {
    return this.http.get<User[]>(`${this.apiUrl}/users`, { headers: this.header })
      .pipe(map(users => users.find(user => user.email === request.email))
      );
  }


}


//users
