import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './service/user.service';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    AddUserComponent,
    ShowUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[UserService]
})
export class UserModule { }
