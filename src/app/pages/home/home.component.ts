import { Component } from '@angular/core';
import { Productos } from '../../models/productos.model';
import { CommonModule } from '@angular/common';
import { TarjetaBienvenidaComponent } from '../../components/tarjeta-bienvenida/tarjeta-bienvenida.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TarjetaBienvenidaComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  lista : Productos [] =[
    {
      titulo : "card 1",
      subTitulo : " esto es subtitulo",
      cuerpo : "esto es el cuerpo",
      precio : 10.99

    },
    {
      titulo : "card 2",
      subTitulo : " esto es subtitulo 2",
      cuerpo : "esto es el cuerpo 2",
      precio :20.88

    },
    {
      titulo : "card 3",
      subTitulo : " esto es subtitulo 3",
      cuerpo : "esto es el cuerpo 3",
      precio : 22.99

    }
  ]



reciveData(data :string){
console.log('dato recibido del hijo :' + data)
  }


}
