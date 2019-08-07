import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ButtonSidenavComponent } from './button-sidenav/button-sidenav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddBagComponent } from './add-bag/add-bag.component';
import {MatDialogModule} from '@angular/material/dialog';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BagComponent } from './bag/bag.component';
import { EmployeeComponent } from './employee/employee.component';
import { FactoryMachineComponent } from './factory-machine/factory-machine.component';
import { MaterialColorComponent } from './material-color/material-color.component';
import { MaterialTypeComponent } from './material-type/material-type.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddFactoryMachineComponent } from './add-factory-machine/add-factory-machine.component';
import { AddMaterialColorComponent } from './add-material-color/add-material-color.component';
import { AddMaterialTypeComponent } from './add-material-type/add-material-type.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BagComponent,
    EmployeeComponent,
    FactoryMachineComponent,
    MaterialColorComponent,
    MaterialTypeComponent,
    NavbarComponent,
    ButtonSidenavComponent,
    TopBarComponent,
    AddBagComponent,
    AddEmployeeComponent,
    AddFactoryMachineComponent,
    AddMaterialColorComponent,
    AddMaterialTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ],

  entryComponents: [
    AddBagComponent,
    AddEmployeeComponent,
    AddFactoryMachineComponent,
    AddMaterialColorComponent,
    AddMaterialTypeComponent
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
