import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { AddNewsComponent } from './add-news/add-news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { NewsService } from './service/news.service';
import { ShowNewsComponent } from './show-news/show-news.component';

@NgModule({
  declarations: [
    AddNewsComponent,
    ShowNewsComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers:[NewsService]
})
export class NewsModule { }
