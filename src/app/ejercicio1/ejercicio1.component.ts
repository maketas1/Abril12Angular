import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  dato1: number = 0;
  dato2: number = 0;

  sumar() {
    let resultado: number = Number(this.dato1) + Number(this.dato2);
    console.log(resultado);
  }

  restar() {
    let resultado: number = this.dato1 - this.dato2;
    console.log(resultado);
  }

  multiplicar() {
    let resultado: number = this.dato1 * this.dato2;
    console.log(resultado);
  }

  dividir() {
    if (this.dato2 !== 0) {
      let resultado: number = this.dato1 / this.dato2;
      console.log(resultado);
    } else {
      console.log("No se puede dividir entre cero.");
    }
  }
}
