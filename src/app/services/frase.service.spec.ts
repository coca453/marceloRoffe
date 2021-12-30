import { TestBed, inject } from '@angular/core/testing';

import { FraseService } from './frase.service';

describe('FraseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FraseService]
    });
  });

  it('should be created', inject([FraseService], (service: FraseService) => {
    expect(service).toBeTruthy();
  }));
});
