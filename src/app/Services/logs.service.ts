import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { visitor} from '../visitor/visitor-model/visitor'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';

 import { environment } from '../../environments/environment';


@Injectable()
export class LogsServices {

  constructor(private httpclient: HttpClient) { }

  getAllLogs(){
    return this.httpclient.get(environment.getAllVisitorLogs)
  }

  postLogsById(id, data){
    return this.httpclient.post( environment.postVisitorLog(id), data)
  }

  getLogsById(id): Observable<any>{
    return this.httpclient.get(environment.getVisitorLogById(id));
  }

  updateLogsById(id, data){
    console.log(id);
    console.log(data);
    return this.httpclient.put(environment.updateLogById(id), data)
  }

  activityStatus(id){
    return this.httpclient.get(environment.activityStatus(id))
  }
}
