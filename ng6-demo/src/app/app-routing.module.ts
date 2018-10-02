import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultTemplateComponent } from './containers/default-template/default-template.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultTemplateComponent,
    // pathMatch: 'full',
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'playback',
        loadChildren: './views/playback/playback.module#PlaybackModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'playground',
        loadChildren: './views/playground/playground.module#PlaygroundModule',
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'login',
    loadChildren: './views/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
