import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.dto';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  signedInUser: User;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,) { 
      this.signedInUser = this.authenticationService.signedInUser;
    }

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
