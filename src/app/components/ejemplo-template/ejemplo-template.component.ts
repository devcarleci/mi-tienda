import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-template',
  standalone: true,
  imports: [],
  template: `
  <div> {{mensaje}}</div>
  `,
  //templateUrl: './ejemplo-template.component.html',
  styleUrl: './ejemplo-template.component.scss'
})
export class EjemploTemplateComponent {
mensaje: string= "Hola mundo..."
}
