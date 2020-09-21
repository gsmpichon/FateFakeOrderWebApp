import { TestBed } from '@angular/core/testing';

import { FamiliarsServiceService } from './familiars-service.service';

describe('FamiliarsServiceService', () => {
  let service: FamiliarsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamiliarsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
