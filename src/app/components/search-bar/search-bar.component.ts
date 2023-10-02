import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchBarComponent],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {
  @Input() speciesNameList: string[] = [];
  @Output() selectedData: any = new EventEmitter<any>();
  fcSearchBar = new FormControl('');
  suggestions: string[] = [];
  showSuggestion: boolean = false;

  getSuggestion(){
    let suggestionReceived = this.fcSearchBar.value as string;
    this.suggestions = this.speciesNameList.filter(species => species.toUpperCase().indexOf(suggestionReceived.toUpperCase() || "") > -1);
    this.showSuggestion = true;
  }

  outPutSelectedData(){
    this.getSuggestion();
    if(this.fcSearchBar.value === ""){
      this.showSuggestion = false;
    }
    if(this.suggestions.length === 1 && this.suggestions[0] === this.fcSearchBar.value){
      this.showSuggestion = false;
    }
    this.selectedData.emit(this.fcSearchBar.value);
  }

  setSuggestion(suggestion: string){
    this.fcSearchBar.setValue(suggestion);
    this.outPutSelectedData();
    this.showSuggestion = false;
  }
}
