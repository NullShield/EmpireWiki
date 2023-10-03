import { TestBed } from '@angular/core/testing';

import { StarWarsDataService } from './star-wars-data.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Species } from 'src/app/dto/responses/species';

describe('StarWarsDataService', () => {
  let service: StarWarsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ StarWarsDataService, provideHttpClient()]
    })
    .compileComponents();
    service = TestBed.inject(StarWarsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be return a list of selected Species', () => {
    let selectedSpecies = "droid";
    let species: Species[] = [
      {
        name: "human",
        classification: "N/A",
        designation: "N/A",
        average_height: "N/A",
        skin_colors: "N/A",
        hair_colors: "N/A",
        eye_colors: "N/A",
        average_lifespan: "N/A",
        homeworld: "N/A",
        language: "N/A",
      },
      {
        name: "droid",
        classification: "N/A",
        designation: "N/A",
        average_height: "N/A",
        skin_colors: "N/A",
        hair_colors: "N/A",
        eye_colors: "N/A",
        average_lifespan: "N/A",
        homeworld: "N/A",
        language: "N/A",
      },
      {
        name: "rodian",
        classification: "N/A",
        designation: "N/A",
        average_height: "N/A",
        skin_colors: "N/A",
        hair_colors: "N/A",
        eye_colors: "N/A",
        average_lifespan: "N/A",
        homeworld: "N/A",
        language: "N/A",
      }
    ];
    expect(service.getSelectedSpecies(selectedSpecies, species)).toEqual([species[1]]);
    
  });
});
