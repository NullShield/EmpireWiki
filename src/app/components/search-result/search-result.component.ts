import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Species } from 'src/app/dto/responses/species';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.less']
})
export class SearchResultComponent implements OnInit, OnChanges {
  @Input() selectedSpecies: Species[] = [];

  ngOnInit(): void {
      this.selectedSpecies.push(new Species);
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
}
