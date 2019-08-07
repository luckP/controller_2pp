import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialogRef } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-bag',
  templateUrl: './add-bag.component.html',
  styleUrls: ['./add-bag.component.css']
})
export class AddBagComponent implements OnInit {

  numBagFormControl = new FormControl('', [
    Validators.required,
  ]);

  startTimeFormControl = new FormControl('', [
    Validators.required,
  ]);

  endTimeFormControl = new FormControl('', [
    Validators.required,
  ]);

  mpLotFormControl = new FormControl('', [
    Validators.required,
  ]);

  bagWeightFormControl = new FormControl('', [
    Validators.required,
  ]);

  totalWeightFormControl = new FormControl('', [
    Validators.required,
  ]);

  quantityProducedFormControl = new FormControl('', [
    Validators.required,
  ]);

  employeeFormControl = new FormControl('', [
    Validators.required,
  ]);

  factoryMachineFormControl = new FormControl('', [
    Validators.required,
  ]);

  materialColorFormControl = new FormControl('', [
    Validators.required,
  ]);

  materialTypeFormControl = new FormControl('', [
    Validators.required,
  ]);

  noteFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  public dialogRef: MatDialogRef<AddBagComponent>;

  constructor() { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
