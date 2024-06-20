import { Component } from '@angular/core';
import { EjemploTemplateComponent } from '../../components/ejemplo-template/ejemplo-template.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [EjemploTemplateComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
