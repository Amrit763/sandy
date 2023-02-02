import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MsgServiceService } from 'src/app/shared/service/msg.service';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  allUser:any;
  id:any;
  
  // // pagination
  // tableSize: number=10;
  // page:number=1;
  // count: number= 0;
  
  
    constructor(
      public userService:UserService,
      public msgService:MsgServiceService,
      public activatedRoute:ActivatedRoute
    ) { 
      this.id= this.activatedRoute.snapshot.params['id']
    }
    
    ngOnInit(): void {
      console.log('here is>>',this.userService.getAllUSers())
      this.userService.getAllUSers()
      .subscribe((data:any)=>{
        console.log('data in user in all >>>',data)
        this.allUser=data
      },
      (err)=>{
        console.log('err is >>',err)
      })
    }
    getAllUser(){
      
      this.userService.getAllUSers()
    
      .subscribe((data)=>{
        console.log('here data is>>',data)
        this.allUser=data
      }
      ,
      (err)=>{
        console.log('err is',err)
      })
    }
 
    deleteUser(obj:any){
      this.userService.deleteUserSer(obj)
      .subscribe((data)=>{
        this.msgService.showSuccess('Deleted successfully')
        // console.log('delte>>',data)
        this.getAllUser()
      })
    }
  }