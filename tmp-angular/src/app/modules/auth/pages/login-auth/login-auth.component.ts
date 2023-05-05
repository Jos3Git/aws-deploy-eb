import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({})

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(5),
        Validators.maxLength(15)
      ]),
    })
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password)
      .subscribe(res => {
        this.router.navigate(['/', 'tracks'])
        console.log('TOKEN:', res)
      })
  }

}
