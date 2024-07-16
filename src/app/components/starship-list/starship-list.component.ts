import { AnimateTimings } from '@angular/animations';
import { StarshipService } from './../../services/starship.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss'
})
export class StarshipListComponent {

  starships: any[] = [];

  constructor(private StarshipService: StarshipService) {}

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


}
