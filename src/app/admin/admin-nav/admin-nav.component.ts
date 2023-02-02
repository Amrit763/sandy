import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import {
  MiddlewareService,
} from 'src/app/middleware/service/middleware.service';

import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router: Router,
    private middlewareService: MiddlewareService
  ) { }

  ngOnInit(): void {
  }

  signOut(){
    console.log('i am called')
    this.middlewareService.removeToken();
    this.router.navigate(['/mid'])
  }
}
