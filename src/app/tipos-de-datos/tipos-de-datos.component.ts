import { Component } from '@angular/core';
import { Temporada } from '../_modelo/temporada';

@Component({
  selector: 'app-tipos-de-datos',
  standalone: true,
  imports: [],
  templateUrl: './tipos-de-datos.component.html',
  styleUrl: './tipos-de-datos.component.css'
})
export class TiposDeDatosComponent {
  temporada : Temporada = Temporada.Otoño;
  
  ejercicio1() {
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;

    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;

    if (ukCitizen) {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
  }

  ejercicio2() {
    let x: number;
    let y: number;
    let a: number;
    x = parseInt('5');
    y = 7;
    a = x + y;
    console.log(a);
  }

  whichMonths(season: Temporada): string {
    let monthsInSeason: string;
    switch (season) {
      case Temporada.Otoño:
        monthsInSeason = "Septiembre a Noviembre";
        break;
      case Temporada.Invierno:
        monthsInSeason = "Diciembre a Febrero";
        break;
      case Temporada.Primavera:
        monthsInSeason = "Marzo a Mayo";
        break;
      case Temporada.Verano:
        monthsInSeason = "Junio a Agosto";
        break;
      default:
        monthsInSeason = "Estación no válida";
    }
    return monthsInSeason;
  }

  ejercicio4() {
    let randomNumbers: number[] = [];

    for (let i = 0; i < 10; i++) {
        let nextNumber: number = Math.floor(Math.random() * (100 - 1)) + 1;
        randomNumbers.push(nextNumber);
    }

    console.log(randomNumbers);
  }
}
