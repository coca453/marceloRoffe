import { TestBed, inject } from '@angular/core/testing';

import { MotivacionService } from './motivacion.service';

describe('MotivacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotivacionService]
    });
  });

  it('should be created', inject([MotivacionService], (service: MotivacionService) => {
    expect(service).toBeTruthy();
  }));
});
