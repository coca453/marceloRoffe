import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RinconComponent } from './rincon.component';

describe('RinconComponent', () => {
  let component: RinconComponent;
  let fixture: ComponentFixture<RinconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RinconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
