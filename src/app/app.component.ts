import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TiposDeDatosComponent } from './tipos-de-datos/tipos-de-datos.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TiposDeDatosComponent, Ejercicio1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril12Angular';
}
