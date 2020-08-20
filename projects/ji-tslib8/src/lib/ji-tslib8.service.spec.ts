import { TestBed } from '@angular/core/testing';

import { JiTslib8Service } from './ji-tslib8.service';

describe('JiTslib8Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JiTslib8Service = TestBed.get(JiTslib8Service);
    expect(service).toBeTruthy();
  });
});
