import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStatusDropdownComponent } from './user-status-dropdown/user-status-dropdown.component';
import { MaterialModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoggedUserStatusComponent } from './logged-user-status/logged-user-status.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserStatusDropdownComponent,
    LoggedUserStatusComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    NgbModule,
    FormsModule
  ]
})
export class UserModule { }
