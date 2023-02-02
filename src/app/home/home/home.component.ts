import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { NewsService } from 'src/app/admin/news/service/news.service';
import { UserService } from 'src/app/admin/user/service/user.service';
import { MsgServiceService } from 'src/app/shared/service/msg.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  registerForm = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.email]),
      name: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
    }
  )

  imageUrl:any;
  fileToUpload=[];

  // categories
allNews:any;
service:any;
business:any;
lifeStyle:any;
entertainment:any;
travel:any;
international:any;

  constructor(
    public router:Router,
    private userService: UserService,
    private msgService: MsgServiceService,
    private newsService:NewsService
  ) {
    this.imageUrl = environment.imageURL;

    this.service=[];
    this.business=[];
    this.lifeStyle=[];
    this.entertainment=[];
    this.travel=[];
    this.international=[];
   }

  ngOnInit(): void {
    this.newsService.get()
    .subscribe((data)=>{
      // console.log('all news is>> ',data);
      this.allNews =data
      this.allNews.forEach((element:{categories: string;})=>{
        if(element.categories=='service'){
          this.service.push(element)
        }
        if(element.categories=='newportfolio'){
          this.business.push(element)
        }
        if(element.categories=='brandingprotfolio'){
          this.lifeStyle.push(element)
        }
        if(element.categories=='webportfolio'){
          this.entertainment.push(element)
        }
        if(element.categories=='aboutus'){
          this.travel.push(element)
        }
        if(element.categories=='testomonials'){
          this.international.push(element)
        }
        
      })
     

    })

  }


  // scroll garaune option start
  toPortfolio(){
    document.getElementById("portfolio")?.scrollIntoView({
      behavior:"smooth"
    });
  }

  toService(){
    document.getElementById("ourService")?.scrollIntoView({
      behavior:"smooth"
    });
  }

  toSection(){
    document.getElementById("ourSection")?.scrollIntoView({
      behavior:"smooth"
    });
  }
  toLogo(){
  window.scroll(0,0)
  }

  toContact(){
    document.getElementById("contact ")?.scrollIntoView({
      behavior:"smooth"
    });
  }
  // scroll function end

  register(){
    this.user=this.registerForm.value;
    console.log('here register value>>',this.user);
    this.userService.register(this.user)
      .subscribe(
        (data)=>{
          // console.log('here data submitted is >>',data)
          this.msgService.showSuccess('Message send successfully')
          this.router.navigate(['/home'])
        }
      ),
      (err:any)=>{
        this.msgService.showError(err.error.message)
        // console.log('here err',err)
      }
  }


}
