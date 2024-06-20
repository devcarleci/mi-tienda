import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  providers: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavbarComponent {

  private userService: UserService = inject(UserService)
  userName: string = '';


  constructor() {

    console.log('NavBar');

    // this.userService.user$.subscribe(u => {
    //   this.userName = u?.name ?? ''
    // })

//EJEMPLO CON SIGNAL
    effect(() => {
      this.userName = this.userService.getUser()?.name ?? ''
    });   




  }

}
