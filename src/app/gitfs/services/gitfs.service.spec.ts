import { TestBed } from '@angular/core/testing';

import { GitfsService } from './gitfs.service';

describe('GitfsService', () => {
  let service: GitfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
