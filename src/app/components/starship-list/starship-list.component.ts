
import { StarshipService } from './../../services/starship.service';
import { Component, Output, output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss'
})
export class StarshipListComponent {

  starships: any[] = [];

  constructor(private StarshipService: StarshipService, private router: Router) {}

  ngOnInit(): void {

    this.StarshipService.getStarShips().subscribe({
      next: (data) => {
        this.starships = data.results;
        console.log(this.starships);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  getStarshipName(starship: any) {
    this.StarshipService.setSelectedStarship(starship);
    this.StarshipService.navigateToDetails();
    console.log(starship)
  }
  
}
