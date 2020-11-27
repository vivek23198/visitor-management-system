import { Component, OnInit } from '@angular/core';
import { visitor } from './visitor-model/visitor';
import { visitorListService } from '../Services/visitorList.service';
import { GetVisitorTypeService} from '../Services/get-visitor-type.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import {visitorType} from './visitorType'
import { Router } from '@angular/router';
import {environment } from '../../environments/environment';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  visitorType: visitorType[];
  errMsg: String = null;


  constructor(private visitorList: visitorListService,
                private _http: HttpClient,
                private route: Router,
                private getVisitorType: GetVisitorTypeService) { }

  ngOnInit(){

    this.getVisitorType.getVisitorsType()
    .subscribe(
      res => {
        console.log(res);
        this.visitorType= res;

      }
    )
  }



  onSubmit(data: NgForm){
   console.log(data);
    this._http.post(environment.postVisitor, data)
      .subscribe(
        res => {
          this.route.navigate(['/visitor'])
          console.log(res);
        },
        err => {
          if(err.status === 500){
            this.errMsg = "Enter Details Properly !"
          }
          if(err.status === 400){
            this.errMsg = "Please Fill All The Required Field !"
          }
        }
      )


  }

}
