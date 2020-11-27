import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { visitor} from '../visitor/visitor-model/visitor'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { environment } from '../../environments/environment';


@Injectable()
export class GetVisitorTypeService {

  constructor(private httpclient: HttpClient) { }

  getVisitorsType(): Observable<any>{
    return this.httpclient.get(environment.getVisitorType);
  }
}
