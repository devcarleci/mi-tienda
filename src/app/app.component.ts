import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { FooterComponent } from './components/common-components/footer/footer.component';
import { CommonComponentsModule } from './components/common-components/common-components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoaderComponent, CommonComponentsModule,],
  providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  // private userService: UserService = inject(UserService)


  title = 'mi-tienda';

  // userLogin: User | null = null;

  constructor(){
    // this.userLogin = this.userService.getUser()
  }
}

