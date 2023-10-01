import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { StarWarsDataService } from 'src/app/services/star-wars-data/star-wars-data.service';
import { Species } from 'src/app/dto/responses/species';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from '../search-result/search-result.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, SearchResultComponent, HttpClientModule],
  providers:[ HttpClient, StarWarsDataService],
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.less']
})
export class WikiComponent implements OnInit{
  private subscription: Subscription;

  species: Species[] = [];
  speciesNameList: string[] = [];
  selectedData = "";
  selectSpecies: Species[] = [];

  constructor(private swDataService: StarWarsDataService){
    this.subscription = new Subscription();
  }
  ngOnInit(): void {
    this.subscription = this.swDataService.species.subscribe((species) => {
      console.log("wiki species: " + species);
      this.species = species;
      this.selectSpecies = this.species;
      this.species.forEach((element) =>{
        this.speciesNameList.push(element.name);
      });
      if(species[0].name !== "N/A"){
        this.subscription.unsubscribe();
      }
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
