import { StarshipService } from './../../services/starship.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {

  @Input() films: any[] = [];

  constructor(private StarshipService: StarshipService) {}


  handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = this.StarshipService.getDefaultImageUrl();
  }
}
