import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';

import { UserService } from '../user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  token: any;
  constructor (
    private userService:UserService,
    private router:Router
  ){

  }
  canActivate() {
    // this.userService.getAllUSers()
      return false;

  }
  
}
