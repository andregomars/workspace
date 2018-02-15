import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,
  FormControl, Validators } from '@angular/forms';
import {IMyDrpOptions} from 'mydaterangepicker';

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
  private myForm: FormGroup;
  private beginDate: Date;
  private endDate: Date;

  constructor(
    private fb: FormBuilder
  ) { }

  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'mm/dd/yyyy'
  };


  get myDateRange() { return this.myForm.get('myDateRange'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get pwd() { return this.signupForm.get('password').get('pwd'); }
  get confirmPwd() { return this.signupForm.get('password').get('confirmPwd'); }
  get gender() { return this.signupForm.get('gender'); }
  get terms() { return this.signupForm.get('terms'); }

  ngOnInit() {
    this.myForm = this.fb.group({
      myDateRange: [
        { 
          beginDate: {year: 2018, month: 2, day: 9}, 
          endDate: {year: 2018, month: 2, day: 19}
        }, 
        Validators.required
      ]
      // other controls are here...
    });

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

  // daterangepicker form methods
  onSubmitReactiveForms(): void {
      console.log('Value: ', this.myForm.controls['myDateRange'].value, ' - Valid: ', this.myForm.controls['myDateRange'].valid,
                  ' - Dirty: ', this.myForm.controls['myDateRange'].dirty, ' - Touched: ', this.myForm.controls['myDateRange'].touched);
      if (this.myDateRange.valid && this.myDateRange.dirty && this.myDateRange.touched) {
        const start = this.myDateRange.value.beginDate;
        const end = this.myDateRange.value.endDate;
        this.beginDate = new Date(start.year, start.month-1, start.day);
        this.endDate = new Date(end.year, end.month-1, end.day);
      }
  }

  setDateRange(): void {
      // Set today range using the setValue function
      let date: Date = new Date();
      let year: number = date.getFullYear();
      let month: number = date.getMonth() + 1;
      let day: number = date.getDate();
      this.myForm.setValue({myDateRange: {beginDate: {year: year, month: month, day: day}, endDate: {year: year, month: month, day: day}}});
  }

  resetDateRange(): void {
      // Reset date picker to specific date range (today)
      let date: Date = new Date();
      let year: number = date.getFullYear();
      let month: number = date.getMonth() + 1;
      let day: number = date.getDate();
      this.myForm.reset({myDateRange: {beginDate: {year: year, month: month, day: day}, endDate: {year: year, month: month, day: day}}});
  }

  clearDateRange(): void {
      // Clear the date range using the setValue function
      this.myForm.setValue({myDateRange: null});
  }

  // reactive form methods 
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
