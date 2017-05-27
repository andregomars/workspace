import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  vehicleItems: any;
  fleetItem: any;
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.initDemoMenu();
  }

  private initDemoMenu(): void {
    this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            },
            {
                label: 'Quit', icon: 'fa-minus'
            }
        ];
  }
  
  private initHamsMenu(): void {
    this.fleetItem = [{
            label: 'LBT',
            routerLink: ['/fleet', 'LBT'],
            items: [
                { 
                  label: 'AZ01',
                  routerLink: ['/vehicle', 'AZ01'],
                }, { 
                  label: 'AZ02',
                  routerLink: ['/vehicle', 'AZ02'],
                }
            ]
        },
        {
            label: 'BYD',
            routerLink: ['/fleet', 'BYD'],
            items: [
                { 
                  label: 'P01',
                  routerLink: ['/vehicle', 'P01'],
                }, { 
                  label: 'P02',
                  routerLink: ['/vehicle', 'P02'],
                }
            ]
        }
    ];
  }
}
