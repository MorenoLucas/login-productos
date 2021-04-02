import { TestBed } from '@angular/core/testing';

import { ProgressIndicatorInterceptorService } from './progress-indicator-interceptor.service';

describe('ProgressIndicatorInterceptorService', () => {
  let service: ProgressIndicatorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressIndicatorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
