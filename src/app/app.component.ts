import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarshipListComponent } from "./components/starship-list/starship-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarshipListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sprint-7';
}
