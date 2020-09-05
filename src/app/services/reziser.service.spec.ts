import { TestBed } from '@angular/core/testing';

import { ReziserService } from './reziser.service';

describe('ReziserService', () => {
  let service: ReziserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReziserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
