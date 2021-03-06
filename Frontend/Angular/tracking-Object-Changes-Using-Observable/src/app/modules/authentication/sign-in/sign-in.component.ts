import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.dto';
import { StatusList } from 'src/app/shared/models/user.entity';
import { WebsocketService } from 'src/app/shared/services/websocket.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup = this.fb.group({
    userName: [null, [Validators.required]],
    password: [null, [Validators.required]],
    remember: [false],
  });

  signedInUser: User | undefined;
  title = 'User Status Tracker';

  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder, private router: Router,
    private websocketService: WebsocketService
  ) { }

  ngOnInit(): void {
    this.signInForm.controls["userName"]
  }

  getErrorMessage() {
    if (this.signInForm.controls["userName"].hasError('required')) {
      return 'You must enter a value';
    }

    return this.signInForm.controls["userName"].hasError('email') ? 'Not a valid email' : '';
  }

  submitSignInForm() {
    console.log(this.signInForm.value)
    let signingInUser: User = {
      name: this.signInForm.value.userName,
      status: StatusList.ACTIVE
    }
    this.authenticationService.getUserSignedIn(signingInUser).subscribe({
      next: (serverResponse) => {
        console.log(serverResponse)
        this.signedInUser = serverResponse.data;
        this.authenticationService.signedInUser = this.signedInUser;
        this.router.navigateByUrl("user");
        this.websocketService.openWebSocket();
        // this.websocketService.sendMessage({
        //   message: this.signedInUser,
        //   type: "entry",
        // });
      },
      error: (error) => {
        alert(error.error.data);
        console.log('error:--> ', error);
        this.signedInUser = undefined;
      }
    });
  }
}
