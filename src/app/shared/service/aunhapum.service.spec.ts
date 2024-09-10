import { TestBed } from '@angular/core/testing';

import { AunhapumService } from './aunhapum.service';

describe('AunhapumService', () => {
  let service: AunhapumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AunhapumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
