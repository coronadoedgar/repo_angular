import { TestBed, inject } from '@angular/core/testing';

import { MyServicePromiseService } from './my-service-promise.service';

describe('MyServicePromiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServicePromiseService]
    });
  });

  it('should ...', inject([MyServicePromiseService], (service: MyServicePromiseService) => {
    expect(service).toBeTruthy();
  }));
});
