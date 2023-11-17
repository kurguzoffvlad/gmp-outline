import { TestBed } from '@angular/core/testing';

import { GmpOutlineService } from './gmp-outline.service';

describe('GmpOutlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpOutlineService = TestBed.get(GmpOutlineService);
    expect(service).toBeTruthy();
  });
});
