import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  friends!: User[];
  constructor(private userService:UserService) {
    this.userService.readUsersFromServer().subscribe({
      next: (serverResponse) => {
        console.log(serverResponse)
        this.friends = serverResponse.data;
      },
      error: (error) =>{
        this.friends = [];
      }
    });
   }

  ngOnInit(): void {
  }

}


export interface Friend {
  name: string;
  status: string;
}