import { Observable } from 'rxjs';
import { StarshipService } from './../../services/starship.service';
import { Component, Input, input } from '@angular/core';
import { Starship } from '../../interfaces/starship';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent {

  selectedStarship: any
  constructor(private StarshipService: StarshipService) {}

  ngOnInit(): void {

  }

  onClick() {
    this.selectedStarship = this.StarshipService.getSelectedStarship()
  }
}
