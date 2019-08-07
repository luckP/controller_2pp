import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FactoryMachine } from '../models/factory_machine';

const ELEMENT_DATA: FactoryMachine[] = [
  {id: 1, name: 'name'},
  {id: 2, name: 'name'},
  {id: 3, name: 'name'},
  {id: 4, name: 'name'},
  {id: 5, name: 'name'},
  {id: 6, name: 'name'},
  {id: 7, name: 'name'},
];

@Component({
  selector: 'app-factory-machine',
  templateUrl: './factory-machine.component.html',
  styleUrls: ['./factory-machine.component.css']
})
export class FactoryMachineComponent implements OnInit {

  @ViewChild (MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
