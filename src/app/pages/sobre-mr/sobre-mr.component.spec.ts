import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMrComponent } from './sobre-mr.component';

describe('SobreMrComponent', () => {
  let component: SobreMrComponent;
  let fixture: ComponentFixture<SobreMrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreMrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
