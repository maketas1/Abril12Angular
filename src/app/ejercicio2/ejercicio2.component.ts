import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  cantidad: number = 0;

  aEurios() {
    //moneda local por defecto
    let resultado: number = this.cantidad * 1.0;
    console.log(resultado);
  }

  aDolares() {
    let resultado: number = this.cantidad * 0.85;
    console.log(resultado);
  }

  aLibras() {
    let resultado: number = this.cantidad * 1.07;
    console.log(resultado);
  }
}
 