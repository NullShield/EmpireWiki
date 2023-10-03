import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { catchError } from 'rxjs';
import { SpeciesRespose } from 'src/app/dao/species-response';
import { PlanetsResponse } from 'src/app/dao/planets-response';
import { Species } from 'src/app/dto/responses/species';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StarWarsDataService {
  private endpoint = `${environment.starWarsAPi}`;
  species: BehaviorSubject<Species[]>;

  constructor(private http: HttpClient,
              private errorService: ErrorHandlerService) { 
    this.species = new BehaviorSubject<Species[]>({} as Species[]);
  }


  getAllSpeciesData(){
    console.log("getAllSpeciesData");
    return this.http.get<SpeciesRespose>(`${this.endpoint}/species`).pipe(
      catchError((error)=> {
        return this.errorService.handleError(
          error,
          'StarWarsDataService:: getAllSpecies Error'
        );
      })
    );
  }
  getAllPlanets(){
    return this.http.get<PlanetsResponse[]>(`${this.endpoint}`).pipe(
      catchError((error)=> {
        return this.errorService.handleError(
          error,
          'StarWarsDataService:: getAllPlanets Error'
        );
      })
    );
  }
  getSelectedSpecies(selectedSpecies: string, speciesList: Species[]): Species[]{
    return speciesList.filter(species => species.name.toLowerCase() === selectedSpecies.toLowerCase());
  }
}
