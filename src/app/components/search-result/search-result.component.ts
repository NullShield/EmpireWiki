import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Species } from 'src/app/dto/responses/species';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.less']
})
export class SearchResultComponent implements OnInit {
  @Input() selectedSpecies: Species[] = [];

  ngOnInit(): void {
      console.log("selectedSpecies: " + this.selectedSpecies);
      this.selectedSpecies.push(new Species);
  }
}
