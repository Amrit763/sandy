import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  checkValue: any;

  userUrl:any;
  url:any;
  constructor(
    public http:HttpClient
  ){
    this.url=environment.Base_URL;
    this.userUrl=environment.Base_URL+'user';

  }
  getOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }
  register(data:any){
    return this.http.post(this.url+'auth/register',data,this.getOptions())
  }
  login(data:any){
    return this.http.post(this.url+'auth/login',data,this.getOptions())
  }

  // get user
  getOptionsUser() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
            // 'token':localStorage.getItem('token')!
        })
    }
  }
  deleteUserSer(user:any){
    console.log('dlt id>>>',user._id)
    return this.http.delete(this.userUrl+'/'+user._id,this.getOptionsUser())
  }
  getAllUSers(){
    console.log('user service for get all user>> ',this.http.get(`${this.userUrl}`,this.getOptionsUser()))
    return this.http.get(`${this.userUrl}`,this.getOptionsUser())
  }

  // saveToken(token: string){
  //   console.log('token of admin is >> ',token);
  //   localStorage.setItem('token',token)
  // }

  // validAdmin(){
  //  let token = localStorage.getItem('token')
  //   console.log('valid amin ma token ',token);
  //   if(token){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}
