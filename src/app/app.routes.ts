import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: '/starships', pathMatch: 'full' },
  { path: '', component: StarshipListComponent },
  { path: 'details', component: StarshipDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
