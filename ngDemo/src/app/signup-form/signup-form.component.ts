import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  private gender: string[];
  private user: User;

  ngOnInit() {
    this.gender =  ['Male', 'Female', 'Others'];
    this.user = new User({
        email: 'andre@gmail.com',
        password: {
          pwd: '' ,
          confirm_pwd: ''
        },
        gender: this.gender[0]
      });
  }

  public onFormSubmit({ value, valid}:
    { value: User, valid: boolean }): void {
    this.user = value;
    console.log( this.user);
    console.log('valid: ' + valid);
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
