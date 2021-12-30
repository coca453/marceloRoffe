import { TestBed, inject } from '@angular/core/testing';

import { RinconService } from './rincon.service';

describe('RinconService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RinconService]
    });
  });

  it('should be created', inject([RinconService], (service: RinconService) => {
    expect(service).toBeTruthy();
  }));
});
