import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultTemplateComponent } from './containers/default-template/default-template.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultTemplateComponent,
    // pathMatch: 'full',
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'playback',
        loadChildren: './views/playback/playback.module#PlaybackModule'
      },
      {
        path: 'playground',
        loadChildren: './views/playground/playground.module#PlaygroundModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
