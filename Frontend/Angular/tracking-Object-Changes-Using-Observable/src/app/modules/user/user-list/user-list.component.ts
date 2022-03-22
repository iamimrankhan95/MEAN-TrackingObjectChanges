import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  friends: Friend[] = [
    {
      name: 'Faysal',
      status: 'Active',
    },
    {
      name: 'Akhtar',
      status: 'Offline',
    },
    {
      name: 'Jannat',
      status: 'Active',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}


export interface Friend {
  name: string;
  status: string;
}