import { TestBed } from '@angular/core/testing';

import { ViaturasService } from './viaturas.service';

describe('ViaturasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViaturasService = TestBed.get(ViaturasService);
    expect(service).toBeTruthy();
  });
});
