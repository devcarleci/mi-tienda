import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cupon',
  standalone: true,
  imports: [],
  templateUrl: './cupon.component.html',
  styleUrl: './cupon.component.scss'
})
export class CuponComponent {

  cuponId: string | null = null;

  constructor(private route: ActivatedRoute) {

     // Usar snapshot si no necesitas detectar cambios

    this.cuponId = this.route.snapshot.paramMap.get('cuponid');

    console.log("primero caso: " + this.cuponId)
    // Usar params observable si necesitas detectar cambios
    // this.route.paramMap.subscribe(params => {
    //   this.cuponId = params.get('cuponid');
    //   console.log("Segundo caso: " + this.cuponId)
    // });

  }
}
