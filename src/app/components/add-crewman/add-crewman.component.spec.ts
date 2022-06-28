import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrewmanComponent } from './add-crewman.component';

describe('AddCrewmanComponent', () => {
  let component: AddCrewmanComponent;
  let fixture: ComponentFixture<AddCrewmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCrewmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCrewmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
