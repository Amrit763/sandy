import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { MiddlewareService } from '../service/middleware.service';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareGuard implements CanActivate {
value: any;
  constructor(
    // public userService: UserService,
    private router:Router,
    private middleService:MiddlewareService
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if(this.middleService.validAdmin()){
    //   console.log('middlewguard ma aayer')
      // this.router.navigate(['/admin'])
      // return true;

    // }
this.value = this.middleService.validAdmin()
console.log('canActivae ma',this.value)

if(this.value){
  return true;
}
else{
  return this.router.createUrlTree(['/mid']);
}
// return this.value? true: false;
    }
}
