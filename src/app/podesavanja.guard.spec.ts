import { TestBed, async, inject } from '@angular/core/testing';

import { PodesavanjaGuard } from './podesavanja.guard';

describe('PodesavanjaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodesavanjaGuard]
    });
  });

  it('should ...', inject([PodesavanjaGuard], (guard: PodesavanjaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
