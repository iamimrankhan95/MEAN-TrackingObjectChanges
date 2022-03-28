import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status, User } from 'src/app/shared/models/user.dto';
import { StatusList } from 'src/app/shared/models/user.entity';
import { AuthenticationService } from '../../authentication/authentication.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-status-dropdown',
  templateUrl: './user-status-dropdown.component.html',
  styleUrls: ['./user-status-dropdown.component.scss'],
})
export class UserStatusDropdownComponent implements OnInit {

  @Input() signedInUser!: User;
  statusList: Status[] = [{
    "name": "ACTIVE",
    "color": "#4287f5"
  },
  {
    "name": "OFFLINE",
    "color": "#c4c4c4"
  },
  {
    "name": "BUSY",
    "color": "#f20707"
  }];
  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    // this.fetchUserDetails();
    // this.fetchStatusList();
  }

  //   fetchUserDetails() {
  //     let params: Map<string, any> = new Map();
  //     params.set('id', this.user.id);
  //     this.userService.fetchUserDetailsById(params).subscribe({
  //       next: (data) => {
  //         if (data) {
  //           console.log('data from server' + data);
  //           this.user = data;
  //           this.activeStatus = data.status;
  //         }
  //       },
  //       error: (err) => {
  //         console.log('HTTP Error', err);
  //         this.user.name = 'Faysal Ahmad';
  //         this.user.status.activeStatus = StatusList.ACTIVE;
  //       },
  //       complete: () => console.info('complete'),
  //     });
  //   }

  fetchStatusList() {
    this.userService.readStatusesFromServer().subscribe({
      next: (serverResponse) => {
        console.log(serverResponse)
        this.statusList = serverResponse.data;
      },
      error: (error) => {
        this.statusList = [];
      }
    });
  }

  changeStatus() {
    this.authenticationService.updateUser(this.signedInUser).subscribe({
      next: (res) => {
        alert("Status updated successfully");
      },
      error: (err) => {
        console.log('HTTP Error', err);
      },
      complete: () => console.info('complete'),
    })
  }

  onSignOut() {
    this.signedInUser.status = StatusList.OFFLINE;
    this.authenticationService.getUserSignedOut(this.signedInUser).subscribe(
      {
        next: (res) => {
          this.router.navigateByUrl('authentication');
        },
        error: (err) => {
          console.log('HTTP Error', err);
        },
        complete: () => console.info('complete'),
      }
    );
  }
}
