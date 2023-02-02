import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/admin/user/service/user.service';

import { MiddlewareService } from '../service/middleware.service';

@Component({
  selector: 'app-middleware',
  templateUrl: './middleware.component.html',
  styleUrls: ['./middleware.component.css']
})
export class MiddlewareComponent implements OnInit {
  user:any;
  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
    constructor(
      public router:Router,
      public authService:UserService,
      private middleService:MiddlewareService
      // public msgService:MsgServiceService
    ) { }
  
    ngOnInit(): void {
    }
  login(){
    // this.router.navigate(['/user/usernav'])
    if(this.loginForm.valid){
      this.user = this.loginForm.value
     this.authService.login(this.loginForm.value)
        .subscribe(
          (data:any)=>{
            // console.log('data aayo:',data)
            this.middleService.saveToken(data.token)
            this.router.navigate(['/admin'])

          },
          (err)=>{
            // this.msgService.showError(err.error.message)
            console.log('err is >>',err)
          },
      
        )
    }else{
      console.log('invalid')
    }
  }




  get loginFormControl(){
    return this.loginForm.controls;
    }

}

