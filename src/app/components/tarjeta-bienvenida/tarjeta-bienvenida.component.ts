import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-bienvenida.component.html',
  styleUrl: './tarjeta-bienvenida.component.scss'
})

export class TarjetaBienvenidaComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.sendDataSalida();
  }

  ngAfterViewInit(): void {
  }

  @Input()
titulo : string ="";
@Input()
subTitulo : string ="";
@Input()
cuerpo : string ="";

@Output()
dataSalida = new EventEmitter<string>();

//salida
sendDataSalida(){
  this.dataSalida.emit('data de salida 01')
}

}

//como enviar informacion de hijo a padre
