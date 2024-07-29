import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarshipListComponent } from "./components/starship-list/starship-list.component";
import { HeaderComponent } from "./components/header/header.component";
import { StarshipDetailsComponent } from "./components/starship-details/starship-details.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarshipListComponent, HeaderComponent, StarshipDetailsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sprint-7';

}
