import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MaterialType } from '../models/materialType';

const ELEMENT_DATA: MaterialType[] = [
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
  selector: 'app-material-type',
  templateUrl: './material-type.component.html',
  styleUrls: ['./material-type.component.css']
})
export class MaterialTypeComponent implements OnInit {

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
