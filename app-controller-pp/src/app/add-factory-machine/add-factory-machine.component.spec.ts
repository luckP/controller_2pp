import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactoryMachineComponent } from './add-factory-machine.component';

describe('AddFactoryMachineComponent', () => {
  let component: AddFactoryMachineComponent;
  let fixture: ComponentFixture<AddFactoryMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFactoryMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactoryMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
