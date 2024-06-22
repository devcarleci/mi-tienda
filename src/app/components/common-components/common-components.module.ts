import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '../../helpers/pipes/upper-case.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    UpperCasePipe
  ],
  exports:[
FooterComponent,
NavbarComponent
  ]
})
export class CommonComponentsModule { }
