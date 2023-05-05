import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { ValidSessionGuard } from './valid-session.guard';

describe('ValidSessionGuard', () => {
  let guard: ValidSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(ValidSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
