import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StarWarsDataService } from 'src/app/services/star-wars-data/star-wars-data.service';
import { Species } from 'src/app/dto/responses/species';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, HttpClientModule],
  providers: [HttpClient, StarWarsDataService],
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.less']
})
export class WebsiteComponent implements OnInit{
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

