import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this._fb.group({
    username: [''],
    password: [''],
  });
  displayError = false;
  displayLoading = false;
  submit() {
    this.displayLoading = true;
    this.backendService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (result) => {
          console.log('Logged In');
          this.displayLoading = false;
          this._router.navigateByUrl('home');
        },
        (error) => {
          this.displayLoading = false;
          this.displayError = true;
        }
      );
  }

  displayErro() {}
  constructor(
    private _fb: FormBuilder,
    private backendService: BackendService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((value) => {
      this.displayError = false;
    });
  }
}
