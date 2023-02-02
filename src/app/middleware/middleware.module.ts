import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AdminModule } from '../admin/admin.module';
import { NewsService } from '../admin/news/service/news.service';
import { UserService } from '../admin/user/service/user.service';
import { SharedModule } from '../shared/shared.module';
import { MiddlewareRoutingModule } from './middleware-routing.module';
import { MiddlewareComponent } from './middleware/middleware.component';

@NgModule({
  declarations: [
    MiddlewareComponent,

  ],
  imports: [
    CommonModule,
    MiddlewareRoutingModule,
    SharedModule,
    AdminModule,
    HttpClientModule
  ],
  providers:[NewsService,UserService]
})
export class MiddlewareModule { }
