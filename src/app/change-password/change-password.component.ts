import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  loginUserData = { username: ''}
  errMsg: string;
  errMsgStatus: boolean = false;


  constructor(private AuthService: AuthService) { }



  ngOnInit() {
    this.loginUserData.username = localStorage.getItem('username')

  }

  changePassword(){
    console.log(this.loginUserData)
    this.AuthService.changePassword(this.loginUserData)
      .subscribe(
        res => {
          console.log("Password Updated Successfully");
           this.AuthService.logoutVisitor()
        },
        err => {
          console.log(err)
          this.errMsgStatus = true
          this.errMsg = "Password Entered incorrectly"
          if(err.status == 500){
            this.errMsg = "Please Fill All the Required Field !"
          }
        }
      )
  }

}
