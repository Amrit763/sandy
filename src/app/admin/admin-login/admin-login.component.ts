import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  user:any;
  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
    constructor(
      public router:Router,
      public authService:UserService,
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
            console.log('data aayo:',data)
            // this.authService.saveToken(data.token)
            this.router.navigate(['/page'])

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
