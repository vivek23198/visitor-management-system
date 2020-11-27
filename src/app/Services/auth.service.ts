import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService{


  constructor(private http: HttpClient,
                private route: Router){

  }

  loginUser(user){
    console.log(user);
    return this.http.post<any>(environment.authenticate, user)
            .pipe(catchError(this.errorHandler))

  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutVisitor() {
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    this.route.navigate(['/auth']);
  }

  changePassword(data){
    console.log(data);
    return this.http.put<any>(environment.changePassword, data);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message);

  }

  resetPassword(data){
    return this.http.put(environment.resetPassword, data)
  }

  registration(data){

    return this.http.post(environment.registration, data)
  }
}
