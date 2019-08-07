import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MaterialColor } from '../models/materialColor';

const ELEMENT_DATA: MaterialColor[] = [
  {id: 1, name: 'name', description: 'description'},
  {id: 2, name: 'name', description: 'description'},
  {id: 3, name: 'name', description: 'description'},
  {id: 4, name: 'name', description: 'description'},
  {id: 5, name: 'name', description: 'description'},
  {id: 6, name: 'name', description: 'description'},
  {id: 7, name: 'name', description: 'description'},
  {id: 8, name: 'name', description: 'description'},
];

@Component({
  selector: 'app-material-color',
  templateUrl: './material-color.component.html',
  styleUrls: ['./material-color.component.css']
})
export class MaterialColorComponent implements OnInit {

  @ViewChild (MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
