import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosComponent } from './medios.component';

describe('MediosComponent', () => {
  let component: MediosComponent;
  let fixture: ComponentFixture<MediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
