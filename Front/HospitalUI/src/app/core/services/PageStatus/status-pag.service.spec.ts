import { TestBed } from '@angular/core/testing';

import { StatusPagService } from './status-pag.service';

describe('StatusPagService', () => {
  let service: StatusPagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusPagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
