import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialUI } from './material-ui';

const routes: Routes = [
    { path: 'material', component: MaterialUI },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
