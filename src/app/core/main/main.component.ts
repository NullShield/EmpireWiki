import { HeaderComponent } from './../../components/header/header.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StarWarsDataService } from 'src/app/services/star-wars-data/star-wars-data.service';
import { Species } from 'src/app/dto/responses/species';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HttpClientModule, RouterModule],
  providers: [StarWarsDataService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  species: Species[] = [];
  constructor(private swDataService: StarWarsDataService){}
  
  ngOnInit(): void {
    console.log("onInit website");
      this.getAllSpecies();
  }

  getAllSpecies(){
    console.log("getAllSpecies");
    this.swDataService.getAllSpeciesData().subscribe((data) => {
      this.species= data.results;
      this.swDataService.species.next(this.species);
    });
  };
}

