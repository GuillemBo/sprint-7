import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private selectedStarship: Starship | undefined;
  private apiUrl: string = 'https://swapi.dev/api/starships';
  private defaultImageUrl: string = 'https://i.pinimg.com/736x/c0/6c/9d/c06c9d63bda3f0a823aee1b2f47b0457.jpg'; // URL de la imagen por defecto

  constructor(private http: HttpClient, private router: Router) {}

  // Función para obtener la lista de naves con paginación
  getStarShips(page: number = 1): Observable<Starship[]> {
    return this.http.get<{ results: Starship[] }>(`${this.apiUrl}/?page=${page}`).pipe(
      map(data => {
        data.results.forEach(starship => {
          starship.image = this.getStarshipImageUrl(starship);
        });
        return data.results;
      })
    );
  }

  // Función para obtener la URL de la imagen de una nave
  getStarshipImageUrl(starship: any): string {
    const id = starship.url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }


  setSelectedStarship(starship: any) {
    this.selectedStarship = starship;
  }

  getSelectedStarship() {
    return this.selectedStarship;
  }

  navigateToDetails(starship: any) {
    this.setSelectedStarship(starship);
    this.router.navigate(['details']);
  }

  getDefaultImageUrl(): string {
    return this.defaultImageUrl;
  }

}
