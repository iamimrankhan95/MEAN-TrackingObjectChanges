import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  constructor(
    private router: Router,) { }

  ngOnInit(): void {
  }
  SignOut() {
    //sign out code
    console.log('sign out hit from parent')
    this.router.navigateByUrl('authentication');
  }
  StatusDropdown() {
    //sign out code
    console.log('status dropdown hit from parent')
  }
}
