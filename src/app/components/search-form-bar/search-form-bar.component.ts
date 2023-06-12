import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-form-bar',
  templateUrl: './search-form-bar.component.html',
  styleUrls: ['./search-form-bar.component.css']
})
export class SearchFormBarComponent {
  @Output() search = new EventEmitter<string>();

  searchTerm: string = '';
  searchCategory: string = 'people';

  constructor(private dataService: DataService) {}

  onSearch(): void {
    if (this.searchCategory === 'people') {
      this.dataService.searchPeopleByName(this.searchTerm).subscribe((data: any) => {
        this.search.emit(data.results);
      });
    } else if (this.searchCategory === 'planets') {
      this.dataService.searchPlanetsByName(this.searchTerm).subscribe((data: any) => {
        this.search.emit(data.results);
      });
    } else if (this.searchCategory === 'starships') {
      this.dataService.searchStarshipsByName(this.searchTerm).subscribe((data: any) => {
        this.search.emit(data.results);
      });
    }
  }
}