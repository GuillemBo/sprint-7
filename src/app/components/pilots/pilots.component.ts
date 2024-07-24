
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent {

  @Input() pilots: any[] = [];

  constructor() {}

}
