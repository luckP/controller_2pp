import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatDialog } from '@angular/material';
import { Bag } from '../models/bag';

const ELEMENT_DATA: Bag[] = [
  {id: 1, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 2, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 3, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 4, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 5, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 6, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 7, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 8, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 9, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 10, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 11, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 12, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 13, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 14, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 15, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 16, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 17, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 18, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 19, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
  {id: 20, num_bag: 10, start_time: 'dd/mm/yyyy hh:mm', end_time: 'dd/mm/yyyy hh:mm', mp_lot: 'asdf', bag_weight: 100.5, total_weight: 120.5, quantity_produced: 20, employee: {id:1, name:'name', code:'code'}, factory_machine: {id: 1, name: 'name'}, material_color: {id:1,name:'name',description:'description'}, material_type: {id:1, name:'name', description: 'description'}, note: 'asdfsd asdf asd fas dfa sdfasdfasdf asdfasdf asdf asdf asdfasd fasd fa sdf '},
];

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  @ViewChild (MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'num_bag', 'start_time', 'end_time', 'mp_lot', 'bag_weight', 'total_weight', 'quantity_produced', 'employee', 'factory_machine', 'material_color', 'material_type', 'note'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor(
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
