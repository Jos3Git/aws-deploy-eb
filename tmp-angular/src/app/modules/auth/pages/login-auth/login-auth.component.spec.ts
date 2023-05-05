import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginAuthComponent } from './login-auth.component';

/** //TODO: Patern AAA Arrange, Act, Assert */

describe('Test Login Auth Component', () => {
  let component: LoginAuthComponent;
  let fixture: ComponentFixture<LoginAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAuthComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('👏👏 Should invalid form', () => {
    //TODO: Arrange
    const dataSet = {
      email: '', //TODO 😨 Invalid!
      password: null
    }

    //TODO: Act
    component.formLogin.setValue(dataSet)

    //TODO: Assert
    expect(component.formLogin.invalid).toBeTrue()
  })

});
