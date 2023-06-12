import { Component, EventEmitter, Output } from '@angular/core';
import { DataService, DataTableItem } from '../services/data.service';

@Component({
  selector: 'app-search-form-bar',
  templateUrl: './search-form-bar.component.html',
  styleUrls: ['./search-form-bar.component.css']
})
export class SearchFormBarComponent {
  @Output() search = new EventEmitter<DataTableItem[]>();
  @Output() categoryChange = new EventEmitter<string>();

  searchTerm: string = '';
  searchCategory: string = 'people';

  constructor(private dataService: DataService) {}

  onSearch(): void {
    if (this.searchCategory === 'people') {
      this.dataService.searchPeopleByName(this.searchTerm).subscribe((data: any) => {
        const searchResults: DataTableItem[] = data.results;
        this.search.emit(searchResults);
      });
    } else if (this.searchCategory === 'planets') {
      this.dataService.searchPlanetsByName(this.searchTerm).subscribe((data: any) => {
        const searchResults: DataTableItem[] = data.results;
        this.search.emit(searchResults);
      });
    } else if (this.searchCategory === 'starships') {
      this.dataService.searchStarshipsByName(this.searchTerm).subscribe((data: any) => {
        const searchResults: DataTableItem[] = data.results;
        this.search.emit(searchResults);
      });
    }
  }

  onCategoryChange(): void {
    this.categoryChange.emit(this.searchCategory);
  }
}
