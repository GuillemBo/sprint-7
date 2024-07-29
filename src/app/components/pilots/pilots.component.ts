
import { Component, Input } from '@angular/core';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent {

  @Input() pilots: any[] = [];

  constructor(private StarshipService: StarshipService) {}


  handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = this.StarshipService.getDefaultImageUrl();
  }

}
