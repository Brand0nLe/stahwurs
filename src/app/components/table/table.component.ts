import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableItem } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnChanges, OnInit {

  constructor(private dialog: MatDialog) {}


  @Input() data: DataTableItem[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() fetchCategory: string = '';


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


  openModal(name: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { name, fetchCategory: this.fetchCategory },
    });
  }

  
}
