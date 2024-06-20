import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userSubject = new BehaviorSubject<User | null>(null)
  user$ = this.userSubject.asObservable();

  private isAuthenticated = new BehaviorSubject<boolean>(false);

  //EJEMPLO CON SEÑALES
  private dataSignal = signal<User | null>(null);

  constructor() {
    console.log('USER SERVICE')

    const storedData = localStorage.getItem('user');

    let user = storedData ? JSON.parse(storedData) : null;

    if (user) {
      this.setUser(user)
    }

  }

  isAuthenticatedUser(): Observable<boolean> {
    return this.isAuthenticated;
  }

  setUser(user: any) {
    // Convertir el objeto user a una cadena JSON
    let userString: string = JSON.stringify(user);
    // Almacenar la cadena JSON en localStorage
    localStorage.setItem('user', userString);
    this.userSubject.next(user)
    this.isAuthenticated.next(true);

    //EJEMPLO CON SIGNAL
    this.dataSignal.set(user);
  }

  clearUser() {
    localStorage.removeItem('user');
    this.isAuthenticated.next(false);
    this.userSubject.next(null)

      //EJEMPLO CON SIGNAL
      this.dataSignal.set(null);

  }

  getUser() {

    //EJEMPLO CON SIGNAL
    return this.dataSignal()
  }

}
