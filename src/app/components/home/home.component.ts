import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StarWarsDataService } from 'src/app/services/star-wars-data/star-wars-data.service';
import { Species } from 'src/app/dto/responses/species';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from '../search-result/search-result.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, SearchResultComponent, HttpClientModule],
  providers:[ HttpClient, StarWarsDataService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{
  species: Species[] = [];
  speciesNameList: string[] = [];
  selectedData = "";
  selectSpecies: Species[] = [];

  constructor(private swDataService: StarWarsDataService){}

  ngOnInit(): void {
      this.getAllSpecies();
  }
  getAllSpecies(){
    console.log("getAllSpecies");
    this.swDataService.getAllSpeciesData().subscribe((data) => {
      this.species = data.results;
      this.selectSpecies = this.species;
      this.species.forEach((element) =>{
        this.speciesNameList.push(element.name);
      });
    });
  }
  getSelectedData(event: any){
    this.selectedData = event;
    this.selectSpecies = this.swDataService.getSelectedSpecies(this.selectedData, this.species);
    if(this.selectSpecies.length === 0){
      this.selectSpecies = this.species;
    }
  }
}
