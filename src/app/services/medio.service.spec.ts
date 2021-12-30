import { TestBed, inject } from '@angular/core/testing';

import { MedioService } from './medio.service';

describe('MedioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedioService]
    });
  });

  it('should be created', inject([MedioService], (service: MedioService) => {
    expect(service).toBeTruthy();
  }));
});
