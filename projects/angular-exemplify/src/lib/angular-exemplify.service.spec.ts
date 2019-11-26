import { TestBed } from '@angular/core/testing';

import { AngularExemplifyService } from './angular-exemplify.service';

describe('AngularExemplifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularExemplifyService = TestBed.get(AngularExemplifyService);
    expect(service).toBeTruthy();
  });
});
