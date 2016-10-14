/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogserviceService } from './logservice.service';

describe('Service: Logservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogserviceService]
    });
  });

  it('should ...', inject([LogserviceService], (service: LogserviceService) => {
    expect(service).toBeTruthy();
  }));
});
