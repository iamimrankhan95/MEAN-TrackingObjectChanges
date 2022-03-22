import { Component, OnInit } from '@angular/core';
import { Status, StatusList, User } from 'src/app/shared/models/user.entity';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-status-dropdown',
  templateUrl: './user-status-dropdown.component.html',
  styleUrls: ['./user-status-dropdown.component.scss'],
})
export class UserStatusDropdownComponent implements OnInit {
  user: User = new User();
  activeStatus: Status = new Status() ;
  color: string = '#4287f5';
  statusList: Status[] = [];
  constructor(private userService: UserService) {
    this.user.id = 2;
  }

  ngOnInit(): void {
    this.fetchUserDetails();
    this.fetchStatusList();
  }

  fetchUserDetails() {
    let params: Map<string, any> = new Map();
    params.set('id', this.user.id);
    this.userService.fetchUserDetailsById(params).subscribe({
      next: (data) => {
        if (data) {
          console.log('data from server' + data);
          this.user = data;
          this.activeStatus = data.status;
        }
      },
      error: (err) => {
        console.log('HTTP Error', err);
        this.user.name = 'Faysal Ahmad';
        this.user.status.activeStatus = StatusList.ACTIVE;
      },
      complete: () => console.info('complete'),
    });
  }
  fetchStatusList() {
    this.userService.fetchAllStatus().subscribe({
      next: (data) => {
        if (data) {
          console.log(data);
          this.statusList = data;
        }
      },
      error: (err) => {
        this.statusList = [
    {
      "id": 1,
      "activeStatus": "ACTIVE",
      "color": "#4287f5"
  },
  {
      "id": 2,
      "activeStatus": "BUSY",
      "color": "#f20707"
  },
  {
      "id": 3,
      "activeStatus": "OFFLINE",
      "color": "#c4c4c4"
  },
  {
      "id": 4,
      "activeStatus": "MEETING",
      "color": "#ed522b"
  }
]
      },
      complete: () => console.info('complete'),
    });
  }

  changeStatus() {
    console.log(this.activeStatus);
    this.activeStatus = this.user.status;
    let params: Map<string, any> = new Map();
    params.set('user', this.user);
    console.log('status changed to ' + this.activeStatus);
    this.userService.changeActiveStatusByUserId(params).subscribe((data) => {
      console.log(data);
    });
  }
}
