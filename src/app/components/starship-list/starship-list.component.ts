
import { StarshipService } from './../../services/starship.service';
import { Component, HostListener,} from '@angular/core';


@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss'
})
export class StarshipListComponent {

  starships: any[] = [];
  currentPage: number = 1;
  loading: boolean = false;

  constructor(private StarshipService: StarshipService) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.loading) {
      this.loadStarships();
    }
  }

  loadStarships(): void {
    if (this.loading) return;
    if (this.currentPage >= 5) {
      return;
    }
    this.loading = true;
    this.StarshipService.getStarShips(this.currentPage).subscribe({
      next: (data) => {
        this.starships = [...this.starships, ...data];
        this.currentPage++;
        this.loading = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.loading = false;
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  getStarshipName(starship: any) {
    this.StarshipService.navigateToDetails(starship);
  }

}
