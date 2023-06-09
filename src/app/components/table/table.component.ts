import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface DataTableItem {
  name: string;
  field1: string;
  field2: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() set data(value: DataTableItem[]) {
    this.dataSource.data = value;
  }

  displayedColumns: string[] = ['name', 'field1', 'field2'];
  dataSource = new MatTableDataSource<DataTableItem>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
