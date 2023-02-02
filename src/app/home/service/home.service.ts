import { Injectable } from '@angular/core';

import { NewsService } from 'src/app/admin/news/service/news.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private newService:NewsService
  ) { }
}
