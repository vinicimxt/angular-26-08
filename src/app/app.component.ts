import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttComponenteComponent } from "./att-componente/att-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
