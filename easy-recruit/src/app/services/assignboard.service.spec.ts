import { TestBed } from '@angular/core/testing';

import { AssignboardService } from './assignboard.service';

describe('AssignboardService', () => {
  let service: AssignboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
