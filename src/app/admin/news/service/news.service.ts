import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url:any;
  constructor(
    public http:HttpClient
  ) {
    this.url=environment.Base_URL+'news';
   }
   getOptions(){
    return{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }
  addNews(data:any){
    return this.http.post(`${this.url}`,data,this.getOptions())
  }
  get() {
    return this.http.get(`${this.url}`, this.getOptions())
  }
  remove(id: string) {
    return this.http.delete(`${this.url}/${id}`, this.getOptions())
  }
  getById(id:string){
    return this.http.get(`${this.url}/${id}`,this.getOptions())
  }
  getNewsByCategory(){
    return this.http.get(`${this.url}`,this.getOptions())
  }

  upload(data: any, files: Array<any>, httpVerb:string, URL:string) {
    console.log('dattaaaaa',data)
   return new Observable((observer) => {
     
       const xhr = new XMLHttpRequest();
       const formData = new FormData();
       for (var file in files) {
           if (files.length > 3) {
               observer.error({ error: { message: 'Do not upload more than 3 photos' } })
           }
           if (file !== 'length' && file !== 'item') {
               formData.append('img', files[file], files[file].name);
           
           }

       }

       for (let key in data) {
           formData.append(key, data[key]);
       }
       xhr.onreadystatechange = () => {
           if (xhr.readyState == 4) {
               if (xhr.status == 200) {
                   observer.next(xhr.response);
               } else {
                   observer.error(xhr.response);
               }
           }
       }
       let url = `${URL}?token=${localStorage.getItem('token')}`;
       if (httpVerb == "PUT") {
           url = `${URL}/${data._id}?token=${localStorage.getItem('token')}`;
           console.log('this.url here', url);
       }
       xhr.open(httpVerb, url, true);
       xhr.send(formData);
   })
}

}