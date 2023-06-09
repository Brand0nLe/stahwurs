import { Component, OnInit } from '@angular/core';
import { DataService, DataTableItem } from '../../services/data.service';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {
  peopleData: DataTableItem[] = [];
  displayedColumns: string[] = ['name', 'field1', 'field2'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchPeopleData().subscribe(data => {
      this.peopleData = data;
      console.log(this.peopleData);
    });
  }
}
