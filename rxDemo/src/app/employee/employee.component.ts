import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-employee',
  template: `
    <p>
      Employees:
    </p>
    <pre>{{ customers | json }}</pre>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {
  @Input() customers: Person;

  constructor() { }

  ngOnInit() {
  }

}
