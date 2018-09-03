import { Component, OnInit } from '@angular/core';
import { navItems, NavItem } from '../../_nav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: NavItem[];

  constructor() { }

  ngOnInit() {
    this.items = navItems;
  }

}
