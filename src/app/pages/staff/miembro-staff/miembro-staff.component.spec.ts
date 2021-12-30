import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroStaffComponent } from './miembro-staff.component';

describe('MiembroStaffComponent', () => {
  let component: MiembroStaffComponent;
  let fixture: ComponentFixture<MiembroStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
