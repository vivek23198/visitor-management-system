import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService} from '../Services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {

  loginUserData = { };
  public errMsg;
  adminAuthentication = false;

  constructor(private _auth: AuthService,
              private route: Router,
              private renderer: Renderer2) {
                //this.renderer.setStyle(document.body, 'background-color', 'yellow');
               }

  ngOnInit(): void {
  }


    loginUser(){
      console.log(this.loginUserData['username']);

      this._auth.loginUser(this.loginUserData)
        .subscribe(
          res => {
            // console.log(JSON.parse(res['jwt']))
            this.adminAuthentication = true;
            localStorage.setItem('token', res.jwt)
            localStorage.setItem('username', this.loginUserData['username'])
            this.route.navigate(['/visitor'])
          },
          err => {
            this.errMsg = "Username/Password Entered Wrong !"

          }
        )
    }

    registerUser(){
      this.route.navigate(['/register']);
    }



}
