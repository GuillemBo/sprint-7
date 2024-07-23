import { Routes } from '@angular/router';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'starships', component: StarshipListComponent },
  { path: 'details', component: StarshipDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
