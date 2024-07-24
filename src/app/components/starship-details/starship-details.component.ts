import { Observable } from 'rxjs';
import { StarshipService } from './../../services/starship.service';
import { Component, Input, input } from '@angular/core';
import { Starship } from '../../interfaces/starship';
import { Router } from '@angular/router';
import { PilotsComponent } from "../pilots/pilots.component";

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [PilotsComponent],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent {

  ImgStarhsips: any[] = [];

  pilots: any[] = [];

  selectedStarship: any
  constructor(private StarshipService: StarshipService, private router: Router) {}

  ngOnInit(): void {
    this.selectedStarship = this.StarshipService.getSelectedStarship();
    if (!this.selectedStarship) {
      this.router.navigate(['']);
    } else {
      this.loadPilots();
    }
  }

  loadPilots(): void {
    this.StarshipService.getPilots().subscribe({
      next: (pilots) => {
        this.pilots = pilots;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Pilots loaded');
      }
    });
  }

  goBack() {
    this.router.navigate(['/starships']);
  }

  handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = this.StarshipService.getDefaultImageUrl();
  }
}
