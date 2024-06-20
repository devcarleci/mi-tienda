import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserLogin } from '../../models/user-login.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private userService: UserService = inject(UserService)

 constructor(){}
 
  ngOnInit(): void {
    this.userService.clearUser()
  }


  resultado: string = '';
  // user: User | null = null

  private authService: AuthService = inject(AuthService)

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(4)])

  })

  onSubmit() {

    if (this.loginForm.valid) {
      let request: UserLogin = {
        email: this.loginForm.controls.userName.value ?? '',
        password: this.loginForm.controls.userPassword.value ?? ''
      }
      this.authService.getLogin(request).subscribe(result=>{
        if (result == null){
          throw new Error("usuario no valido, no existe")
        }
        this.userService.setUser(result)
        console.log('logeado')
      })
      this.resultado = "Todos los datos son válidos";

    } else
      this.resultado = "Hay datos inválidos en el formulario";


    // let user = this.loginForm.controls.userName.value
    // let pass = this.loginForm.controls.userPassword.value
    // console.log('hola aqui');
    // alert(' es usuario es ' + user + '  y el password es: ' + pass);
  }
}

// validadion de formuario dentro de un requerido formgroup
