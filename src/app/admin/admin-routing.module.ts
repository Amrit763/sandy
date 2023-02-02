import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  AdminDashboardComponent,
} from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'admin-dashboard',
    pathMatch:'full',
    // canActivate:[MiddlewareGuard]
  },
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path:'news',
        loadChildren:()=>import('./news/news.module').then(m=>
          m.NewsModule)
      },
      {
        path:'user',
        loadChildren:()=>import('./user/user.module').then(m=>
          m.UserModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
