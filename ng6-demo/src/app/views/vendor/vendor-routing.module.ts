import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { VendorListComponent } from './vendor-list.component';

const routes: Routes = [
  {
    path: '',
    component: VendorListComponent
  },
  {
    path: ':id',
    component: VendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
