import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee';
import { MatPaginator, MatTableDataSource } from '@angular/material';

const ELEMENT_DATA: Employee[] = [
  {id: 1, name: 'name', code: 'code'},
  {id: 2, name: 'name', code: 'code'},
  {id: 3, name: 'name', code: 'code'},
  {id: 4, name: 'name', code: 'code'},
  {id: 5, name: 'name', code: 'code'},
  {id: 6, name: 'name', code: 'code'},
  {id: 7, name: 'name', code: 'code'},
  {id: 8, name: 'name', code: 'code'},
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  @ViewChild (MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'code'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
