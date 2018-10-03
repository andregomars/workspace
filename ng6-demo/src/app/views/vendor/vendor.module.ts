import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { VendorListComponent } from './vendor-list.component';

@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule
  ],
  declarations: [VendorComponent, VendorListComponent]
})
export class VendorModule { }
