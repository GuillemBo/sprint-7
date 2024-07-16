import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) { }

  getStarShips(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/starships')
  }
}
