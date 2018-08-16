import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  passwordrepeat: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.username = 'andre';
    this.email = 'andre@test.com';
    this.password = '11111111';
    this.passwordrepeat = '11111111';
  }

  signUp() {
    this.authService.signUp(this.email, this.username, this.password);
  }

}
