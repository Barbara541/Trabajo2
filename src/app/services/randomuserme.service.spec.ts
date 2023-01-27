import { TestBed } from '@angular/core/testing';

import { RandomusermeService } from './randomuserme.service';

describe('RandomusermeService', () => {
  let service: RandomusermeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomusermeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
