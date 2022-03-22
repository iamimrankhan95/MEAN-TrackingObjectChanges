import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logged-user-status',
  templateUrl: './logged-user-status.component.html',
  styleUrls: ['./logged-user-status.component.scss']
})
export class LoggedUserStatusComponent implements OnInit {
  username!: string;
  status!: string;
  @Output() onSignOut: EventEmitter<this> = new EventEmitter();
  @Output() onStatusChange: EventEmitter<this> = new EventEmitter();
  constructor() {
    this.username = "Test User";
    this.status = "Active";
  }

  ngOnInit(): void {
  }

  on_sign_out() {
    //sing out code
    this.onSignOut.emit(this);
    console.log('sign out hit from child')
  }
  on_status_dropdown() {
    //on status change code
    this.onStatusChange.emit(this);
    console.log('status change hit from child')
  }

}
