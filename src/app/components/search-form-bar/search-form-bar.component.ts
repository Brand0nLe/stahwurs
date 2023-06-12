import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form-bar',
  templateUrl: './search-form-bar.component.html',
  styleUrls: ['./search-form-bar.component.css']
})
export class SearchFormBarComponent {
  @Output() search = new EventEmitter<string>();

  searchTerm: string = '';
  searchCategory: string = 'people';

  onSearch(): void {
    const filterValue = `${this.searchCategory},${this.searchTerm}`;
    this.search.emit(filterValue);
}
}
