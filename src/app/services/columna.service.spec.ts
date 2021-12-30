import { TestBed, inject } from '@angular/core/testing';

import { ColumnaService } from './columna.service';

describe('ColumnaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColumnaService]
    });
  });

  it('should be created', inject([ColumnaService], (service: ColumnaService) => {
    expect(service).toBeTruthy();
  }));
});
