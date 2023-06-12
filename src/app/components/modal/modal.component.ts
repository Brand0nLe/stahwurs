import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService, DataTableItem } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  additionalData: DataTableItem | undefined;

  fetchCategoryMap: { [category: string]: (name: string) => void } = {
    people: this.fetchPeopleData.bind(this),
    planets: this.fetchPlanetsData.bind(this),
    starships: this.fetchStarshipsData.bind(this)
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string, fetchCategory: string },
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const fetchFunction = this.fetchCategoryMap[this.data.fetchCategory];
    if (fetchFunction) {
      fetchFunction(this.data.name);
    }
  }

  fetchPeopleData(name: string): void {
    this.dataService.searchPeopleByName(name)
      .subscribe(response => {
        this.additionalData = response.results[0];
      });
  }

  fetchPlanetsData(name: string): void {
    this.dataService.searchPlanetsByName(name)
      .subscribe(response => {
        this.additionalData = response.results[0];
      });
  }

  fetchStarshipsData(name: string): void {
    this.dataService.searchStarshipsByName(name)
      .subscribe(response => {
        this.additionalData = response.results[0];
      });
  }
}
