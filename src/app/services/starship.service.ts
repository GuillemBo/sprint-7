import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  selectedStarshipName: string = ''

  constructor(private http: HttpClient, private router: Router) { }


  selectedStarship: any;

  getStarShips(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/starships')
  }

  setSelectedStarship(starship: any) {
    this.selectedStarship = starship;
  }

  getSelectedStarship() {
    return this.selectedStarship;
  }

  navigateToDetails() {
    this.router.navigate(['details']);
  }

}
