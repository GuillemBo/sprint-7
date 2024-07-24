import { StarshipService } from './../../services/starship.service';
import { AuthService } from './../../services/auth.service';
import { AuthGuard } from './../../guard/auth.guard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent {

  starshipPilots: any

  constructor(private StarshipService: StarshipService) {}

  ngOnInit(){
    this.starshipPilots = this.StarshipService.getPilots()
    console.log(this.starshipPilots)
  }

}
