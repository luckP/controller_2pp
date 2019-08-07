import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BagComponent } from './bag/bag.component';
import { MaterialTypeComponent } from './material-type/material-type.component';
import { MaterialColorComponent } from './material-color/material-color.component';
import { FactoryMachineComponent } from './factory-machine/factory-machine.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'bag', component: BagComponent},
  {path: 'material-type', component: MaterialTypeComponent},
  {path: 'material-color', component: MaterialColorComponent},
  {path: 'factory-machine', component: FactoryMachineComponent},
  {path: 'employee', component: EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
