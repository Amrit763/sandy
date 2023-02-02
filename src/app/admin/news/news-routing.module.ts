import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AddNewsComponent } from './add-news/add-news.component';
import { NewsComponent } from './news/news.component';
import { ShowNewsComponent } from './show-news/show-news.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'add-news',
    pathMatch:'full'
  },
  {
    path:'',
    component:NewsComponent,
    children: [
      {
        path:'add-news',
        component:AddNewsComponent
      },
      {
        path:'show-news',
        component:ShowNewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
