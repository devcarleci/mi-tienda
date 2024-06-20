import { ChangeDetectionStrategy, Component, Input, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  providers:[UserService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavbarComponent {

  private userService: UserService = inject(UserService)

  @Input()
  userName: string= '';

   userLogin: User | null = null;

  // userLogin$ =  new BehaviorSubject<User | null>(null)
  // userLogin: BehaviorSubject<User | null>;


   constructor(){
  //  this.userService.user$.subscribe(result=>{
  //   this.userLogin = result
  //  })
  console.log('NavBar');

  this.userLogin = this.userService.getUser()

    if (this.userLogin){

      this.userName = this.userLogin.name
    }


// this.userLogin= this.userService.getUser()
// if (this.userLogin){
//   this.userName = this.userLogin.name
// }
//     console.log( 'user Core: ' + this.userName)

   }

}

//crear otra pagina como about  para comentarios de usuarios  "comentarios" mostrar lo que viene de api de api
//https://jsonplaceholder.typicode.com/posts
