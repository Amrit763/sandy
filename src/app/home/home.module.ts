import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsService } from '../admin/news/service/news.service';
import { UserService } from '../admin/user/service/user.service';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[NewsService, UserService]
})
export class HomeModule { }
