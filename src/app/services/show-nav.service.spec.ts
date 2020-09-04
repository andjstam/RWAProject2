import { TestBed } from '@angular/core/testing';

import { ShowNavService } from './show-nav.service';

describe('ShowNavService', () => {
  let service: ShowNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
