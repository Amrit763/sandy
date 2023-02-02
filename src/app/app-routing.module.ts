import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { MiddlewareGuard } from './middleware/guard/middleware.guard';
import {
  PageNotFoundComponent,
} from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'mid',
    loadChildren:()=> import('./middleware/middleware.module').then(m=>
      m.MiddlewareModule)
  },
  {
    path:'home',
    loadChildren: ()=> import('./home/home.module').then(m=>
      m.HomeModule)
  },
  {
    path:'admin',
    canActivate:[MiddlewareGuard],
    loadChildren:()=> import('./admin/admin.module').then(m=>
      m.AdminModule)
  },
  {
    path:'page',
    component: PageNotFoundComponent,
    // canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
