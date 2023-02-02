import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { MiddlewareComponent } from './middleware/middleware.component';

const routes: Routes = [
  {
    path:'',
    component:MiddlewareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiddlewareRoutingModule { }
