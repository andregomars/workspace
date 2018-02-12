import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,
  FormControl, Validators } from '@angular/forms';

import { passwordMatch } from './password-match';

@Component({
  selector: 'app-signup-form-reactive',
  templateUrl: './signup-form-reactive.component.html',
  styleUrls: ['./signup-form-reactive.component.css']
})
export class SignupFormReactiveComponent implements OnInit {

  private genderList: string[];
  private user: User;
  private signupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get pwd() { return this.signupForm.get('password').get('pwd'); }
  get confirmPwd() { return this.signupForm.get('password').get('confirmPwd'); }
  get gender() { return this.signupForm.get('gender'); }
  get terms() { return this.signupForm.get('terms'); }

  ngOnInit() {
    this.genderList =  ['Male', 'Female', 'Others'];
    this.signupForm = this.fb.group({
      email: ['', [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ]],
      password: this.fb.group({
        pwd: ['', [
          Validators.required,
          Validators.minLength(8)
        ]],
        confirmPwd: ['', Validators.required]
      }, {
        validator: passwordMatch
      }),
      gender: ['', Validators.required],
      terms: ['', Validators.required]
    });
  }

  onFormSubmit(): void {
    if (this.signupForm.valid) {
      this.user = this.signupForm.value;
    }
  }
}

class User {
  id: number;
  email: string;

  password: {
    pwd: string;
    confirmPwd: string;
  };
  gender: string;
  terms: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
