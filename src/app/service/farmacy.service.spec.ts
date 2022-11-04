import { TestBed } from '@angular/core/testing';

import { FarmacyService } from './farmacy.service';

describe('FarmacyService', () => {
  let service: FarmacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
