import { Component, OnInit, Input } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatDialog } from '@angular/material';
import { AddBagComponent } from '../add-bag/add-bag.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AddFactoryMachineComponent } from '../add-factory-machine/add-factory-machine.component';
import { AddMaterialColorComponent } from '../add-material-color/add-material-color.component';
import { AddMaterialTypeComponent } from '../add-material-type/add-material-type.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() title: string;
  @Input() className:any;

  private classMap = { 
    'AddBagComponent': AddBagComponent,
    'AddEmployeeComponent': AddEmployeeComponent,
    'AddFactoryMachineComponent': AddFactoryMachineComponent,
    'AddMaterialColorComponent': AddMaterialColorComponent,
    'AddMaterialTypeComponent': AddMaterialTypeComponent,
  };

  constructor(
    public sidenavService: SidenavService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog():void{
    const dialogRef = this.dialog.open(this.classMap[this.className], {
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log('dialog closed');
    });
  }

}
