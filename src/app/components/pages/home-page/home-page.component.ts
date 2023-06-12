import { Component } from '@angular/core';
import { DataService, DataTableItem } from '../../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  searchCategory: string = 'people';
  searchResults: DataTableItem[] = [];

  constructor(private dataService: DataService) {}

  handleSearchResults(results: DataTableItem[]): void {
    this.searchResults = results;
  }

  handleCategoryChange(category: string): void {
    this.searchCategory = category;
  }
}
