import { Component, Input, OnInit } from '@angular/core';
import { Status, User } from 'src/app/shared/models/user.dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-status-dropdown',
  templateUrl: './user-status-dropdown.component.html',
  styleUrls: ['./user-status-dropdown.component.scss'],
})
export class UserStatusDropdownComponent implements OnInit {

  @Input() signedInUser!: User;
  statusList: Status[] = [];
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    // this.fetchUserDetails();
    this.fetchStatusList();
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
      error: (error) =>{
        this.statusList = [];
      }
    });
  }

  changeStatus() {
    // console.log(this.activeStatus);
    // this.activeStatus = this.user.status;
    // let params: Map<string, any> = new Map();
    // params.set('user', this.user);
    // console.log('status changed to ' + this.activeStatus);
    // this.userService.changeActiveStatusByUserId(params).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
