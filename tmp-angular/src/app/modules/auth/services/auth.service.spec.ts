import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`❤❤ should return token`, () => {
    const dataSet = {
      email: 'test@test.com',
      password: '123456'
    }

    service.sendCredentials(dataSet.email, dataSet.password)
      .subscribe(res => {
        expect(res.token).toEqual('123456')
      })
  })
});
