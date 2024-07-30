
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
  nextPageUrl: string | null;
  loading: boolean = false;

  constructor(private StarshipService: StarshipService) {
    this.nextPageUrl = `${this.StarshipService.getApiUrl()}/?page=1`;
  }

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
    if (this.loading || !this.nextPageUrl) return;
    this.loading = true;
    this.StarshipService.getStarShips(this.nextPageUrl).subscribe({
      next: (data) => {
        this.starships = [...this.starships, ...data.results];
        this.nextPageUrl = data.next;
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
