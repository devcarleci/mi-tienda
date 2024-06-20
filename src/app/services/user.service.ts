import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data: User;
  private userSubject = new BehaviorSubject<User | null>(null)
  // user$ = this.userSubject.asObservable();
  user$ = this.userSubject.asObservable();

  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() {
    console.log('USER SERVICE')
    // Recuperar los datos del almacenamiento local al iniciar el servicio
    const storedData = localStorage.getItem('user');
    this.data = storedData ? JSON.parse(storedData) : null;

    if (this.data) {
      this.userSubject.next(this.data);
    }
   }

  isAuthenticatedUser(): Observable<boolean> {
    return this.isAuthenticated;
  }

  setUser(user: any){
     // Convertir el objeto user a una cadena JSON
  let userString: string = JSON.stringify(user);
  // Almacenar la cadena JSON en localStorage
    localStorage.setItem('user', userString);
    this.userSubject.next(user)
    this.isAuthenticated.next(true);
  }

  clearUser(){
    localStorage.removeItem('user');
    this.isAuthenticated.next(false);

  }

  getUser() {

    return this.data;

    // let userString = localStorage.getItem('user');
    // let user: User | null = null;
    // if (userString) {
    //   user = JSON.parse(userString)
    // }

    // this.userSubject.next(user);
    // return user
  }

}
