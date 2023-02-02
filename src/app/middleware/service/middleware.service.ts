import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {

  userUrl:any;
  url:any;
  constructor(
  ){
    this.url=environment.Base_URL;
    this.userUrl=environment.Base_URL+'user';
    this.validAdmin();

  }


  saveToken(tokens: string){
   
    localStorage.setItem('tokens',tokens)
    // console.log('tokens of local strogae admin is >> ',localStorage.setItem('tokens',tokens));
    return tokens;
  }

  validAdmin(){
   let tokens = localStorage.getItem('tokens')
    if(tokens){
      console.log('valid amin ma here ',tokens);
      return true;
    }else{

      return false;
    }
  }
  removeToken(){
    localStorage.removeItem('tokens')
  }
}
