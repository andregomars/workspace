import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LoginComponent } from './view/login/login.component';
import { AdminComponent } from './view/admin/admin.component';
import { AuthGuard } from './core/auth.guard';
import { ViewGuard } from './core/view.guard';
import { AdminGuard } from './core/admin.guard';
import { RegisterComponent } from './view/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,
      canActivate: [ViewGuard] },
  { path: 'admin', component: AdminComponent,
      canActivate: [AdminGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthGuard,
    ViewGuard,
    AdminGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
