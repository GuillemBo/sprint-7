import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StarshipService } from './../../services/starship.service';
import { StarshipListComponent } from './starship-list.component';
import { Starship } from '../../interfaces/starship';

describe('StarshipListComponent', () => {
  let component: StarshipListComponent;
  let fixture: ComponentFixture<StarshipListComponent>;
  let mockStarshipService: jasmine.SpyObj<StarshipService>;

  beforeEach(async () => {
    mockStarshipService = jasmine.createSpyObj('StarshipService', ['getStarShips', 'navigateToDetails', 'getApiUrl']);
    mockStarshipService.getApiUrl.and.returnValue('https://swapi.dev/api/starships');
    mockStarshipService.getStarShips.and.returnValue(of({
      results: [
        {
          name: 'X-Wing',
          model: 'T-65 X-wing',
          manufacturer: 'Incom Corporation',
          cost_in_credits: '149999',
          length: '12.5',
          max_atmosphering_speed: '1050',
          crew: '1',
          passengers: '0',
          cargo_capacity: '110',
          consumables: '1 week',
          hyperdrive_rating: '1.0',
          MGLT: '100',
          starship_class: 'Starfighter',
          pilots: [],
          films: [],
          created: '',
          edited: '',
          url: '',
          image: ''
        },
        {
          name: 'TIE Fighter',
          model: 'Twin Ion Engine/Ln Starfighter',
          manufacturer: 'Sienar Fleet Systems',
          cost_in_credits: '75000',
          length: '6.4',
          max_atmosphering_speed: '1200',
          crew: '1',
          passengers: '0',
          cargo_capacity: '65',
          consumables: '2 days',
          hyperdrive_rating: 'N/A',
          MGLT: 'N/A',
          starship_class: 'Starfighter',
          pilots: [],
          films: [],
          created: '',
          edited: '',
          url: '',
          image: ''
        }
      ],
      next: 'https://swapi.dev/api/starships/?page=2'
    }));

    await TestBed.configureTestingModule({
      imports: [StarshipListComponent],
      providers: [
        { provide: StarshipService, useValue: mockStarshipService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load starships on init', () => {
    component.ngOnInit();
    expect(mockStarshipService.getStarShips).toHaveBeenCalledWith('https://swapi.dev/api/starships/?page=1');
    expect(component.starships.length).toBe(2);
    expect(component.starships[0].name).toBe('X-Wing');
    expect(component.starships[1].name).toBe('TIE Fighter');
  });

  it('should increment page and set loading to false after loading starships', () => {
    component.loadStarships();
    expect(mockStarshipService.getStarShips).toHaveBeenCalledWith('https://swapi.dev/api/starships/?page=1');
    expect(component.starships.length).toBe(2);
    expect(component.nextPageUrl).toBe('https://swapi.dev/api/starships/?page=2');
    expect(component.loading).toBeFalse();
  });

  it('should call navigateToDetails on getStarshipName', () => {
    const starship: Starship = {
      name: 'X-Wing',
      model: 'T-65 X-wing',
      manufacturer: 'Incom Corporation',
      cost_in_credits: '149999',
      length: '12.5',
      max_atmosphering_speed: '1050',
      crew: '1',
      passengers: '0',
      cargo_capacity: '110',
      consumables: '1 week',
      hyperdrive_rating: '1.0',
      MGLT: '100',
      starship_class: 'Starfighter',
      pilots: [],
      films: [],
      created: '',
      edited: '',
      url: '',
      image: ''
    };
    component.getStarshipName(starship);
    expect(mockStarshipService.navigateToDetails).toHaveBeenCalledWith(starship);
  });
});
