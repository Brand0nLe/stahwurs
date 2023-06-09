import { Component, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableItem } from '../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnChanges, OnInit {
  @Input() data: DataTableItem[] = [];
  @Input() displayedColumns: string[] = [];

  dataSource = new MatTableDataSource<DataTableItem>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
  }
}
