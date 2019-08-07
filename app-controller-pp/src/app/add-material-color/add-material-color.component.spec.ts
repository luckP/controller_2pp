import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialColorComponent } from './add-material-color.component';

describe('AddMaterialColorComponent', () => {
  let component: AddMaterialColorComponent;
  let fixture: ComponentFixture<AddMaterialColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaterialColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
