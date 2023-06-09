import { Component, OnInit } from '@angular/core';
import { DataService, DataTableItem } from '../../services/data.service';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.css'],
})
export class PlanetsPageComponent implements OnInit {
  planetsData: DataTableItem[] = [];
  displayedColumns: string[] = ['name', 'climate', 'population'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchPlanetsData().subscribe((data) => {
      this.planetsData = data;
    });
  }
}
