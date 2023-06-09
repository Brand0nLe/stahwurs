import { Component, OnInit } from '@angular/core';
import { DataService, DataTableItem } from '../../services/data.service';

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.css']
})
export class StarshipsPageComponent implements OnInit {
  starshipsData: DataTableItem[] = [];
  displayedColumns: string[] = ['name', 'field1', 'field2'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchStarshipsData().subscribe(data => {
      this.starshipsData = data;
    });
  }
}