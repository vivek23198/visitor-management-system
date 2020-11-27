import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { visitor} from '../visitor/visitor-model/visitor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { environment } from '../../environments/environment';

@Injectable()
export class visitorListService {




  constructor(private httpclient: HttpClient){

  }

  getVisitors(): Observable<any>{

      return this.httpclient.get(environment.getVisitors);
  }



//   saveNewVisitor(data: any): Observable<any> {

//     console.log(data);
//     return this.httpclient.post('https://cors-anywhere.herokuapp.com/https://60c657f171d2.ngrok.io/visitor', data.value)
//  }

  getVisitorById(id){
      return this.httpclient.get<visitor>(environment.getVisitorById(id))
  }


  updateVisitorById(id, data){
    console.log(data);
    console.log(id);
    return this.httpclient.put(environment.updateVisitorById(id), data)
  }


  DeleteVisitorById(id){
    return this.httpclient.delete(environment.deleteVisitorById(id))
  }



}
