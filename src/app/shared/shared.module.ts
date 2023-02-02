import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NewsService } from '../admin/news/service/news.service';
import { UserService } from '../admin/user/service/user.service';
import {
  PageNotFoundComponent,
} from './page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[UserService,NewsService]
})
export class SharedModule { }
