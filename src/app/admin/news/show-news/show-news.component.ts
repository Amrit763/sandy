import {
  Component,
  OnInit,
} from '@angular/core';

import { MsgServiceService } from 'src/app/shared/service/msg.service';
import { environment } from 'src/environments/environment';

import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  // dateTime:any;

// pagination
tableSize: number=10;
page:number=1;
count: number= 0;


imageUrl:any;
allNews:any;
politics:any;
business:any;
lifeStyle:any;
entertainment:any;
travel:any;
international:any;

  constructor(
    public newsService:NewsService,
    public msgService:MsgServiceService
  ) {
    this.imageUrl = environment.imageURL,
    this.politics=[];
    this.business=[];
    this.lifeStyle=[];
    this.entertainment=[];
    this.travel=[];
    this.international=[];
    
   }

  ngOnInit(): void {
    this.newsService.get()
    .subscribe((data:any)=>{
      // console.log('all news in ngOnit ',data);
      this.allNews=data,
      
      data.forEach((element:{categories: string;})=>{
        if(element.categories=='service'){
          this.politics.push(element)
        }
        if(element.categories=='newportfolio'){
          this.business.push(element)
        }
        if(element.categories=='brandingportfolio'){
          this.lifeStyle.push(element)
        }
        if(element.categories=='webportfolio'){
          this.entertainment.push(element)
        }
        if(element.categories=='aboutus'){
          this.travel.push(element)
        }
        if(element.categories=='testmonials'){
          this.international.push(element)
        }
      })
    })
  }

  getAllNews(){
    this.newsService.get()
    .subscribe((data:any)=>{
      console.log('all news',data);
      this.allNews=data
   }
    )
  }
  deleteNews(obj:any){
    // console.log('obj is >>>',obj._id)
    this.newsService.remove(obj._id)
    .subscribe((data)=>{
      this.msgService.showSuccess('Deleted Successfully');
      this.getAllNews()
      // console.log('data is ',this.getAllNews())
    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getAllNews();
  }
}