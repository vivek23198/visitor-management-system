import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  loginUserData = { }
  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
  }

  resetUser(){
    console.log(this.loginUserData);
    this.Auth.resetPassword(this.loginUserData)
      .subscribe(
        res => {
          console.log("Reset Password Link Sent");
        },
        err => {
          console.log("Error occured")
        }
      )
  }

}
