import { TestBed } from '@angular/core/testing';

import { CapeWashingService } from './cape-washing.service';

describe('CapeWashingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapeWashingService = TestBed.get(CapeWashingService);
    expect(service).toBeTruthy();
  });
});
