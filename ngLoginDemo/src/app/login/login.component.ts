import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = 'andregomars@gmail.com';
  password = 'test';

  constructor(private router: Router,
    private customer: CustomerService,
    private api: ApiService
    ) { }

  ngOnInit() {
  }

  tryLogin() {
    this.api.login(this.email, this.password)
      .subscribe(resp => {
          if (resp.token) {
            this.customer.setToken(resp.token);
            this.router.navigate(['/home']);
          }
        },
        resp => {
          alert(resp.error.error);
        }
      );

  }

}
