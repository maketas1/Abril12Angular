import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TiposDeDatosComponent } from './tipos-de-datos/tipos-de-datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TiposDeDatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril12Angular';
}
