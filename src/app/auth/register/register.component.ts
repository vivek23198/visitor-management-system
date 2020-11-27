import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration = { email: '', username: '', password: ''}
  errMsg: string
  errStatus: boolean = false;
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.registration);

    this._auth.registration(this.registration)
      .subscribe(
        res => {
          console.log("Resitered User Successfully");
          this.router.navigate(['/visitor'])
        },
        err=>{
          if(err.status == 409){
            this.errStatus = true;
            this.errMsg = "User Already Exists !!"
            this.registration.email = "";
            this.registration.username = "";
            this.registration.password = "";
          }
          if(err.status == 422){
            this.errStatus = true;
            this.errMsg = "Please Fill All The Required Field !!"
            this.registration.email = "";
            this.registration.username = "";
            this.registration.password = "";
          }
        }
      )

  }

}
