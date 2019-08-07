import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialColorComponent } from './material-color.component';

describe('MaterialColorComponent', () => {
  let component: MaterialColorComponent;
  let fixture: ComponentFixture<MaterialColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
