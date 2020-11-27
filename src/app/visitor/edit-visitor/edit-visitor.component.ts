import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {visitorType} from '../visitorType';
import { visitorListService } from '../../Services/visitorList.service';
import { GetVisitorTypeService } from '../../Services/get-visitor-type.service';
import {HttpClient} from '@angular/common/http';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { visitor } from '../visitor-model/visitor';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent implements OnInit {

   data: visitor;
  visitorType: visitorType[];
  visitorForm: FormGroup;




  constructor(private route: ActivatedRoute, private visitorList: visitorListService,
    private _http: HttpClient, private fb: FormBuilder, private getVisitorTye: GetVisitorTypeService,
    private router: Router) { }

  ngOnInit() {

    this.visitorForm = this.fb.group({
      visitorId: [null],
      visitorName: [''],
      phoneNo: [''],
      address: [''],
      companyName: [''],
      visitorType: this.fb.group({
        tid: [null],
        type: ['']
      }),
    })






    this.getVisitorTye.getVisitorsType()
    .subscribe(
      res => {
        console.log(res);
        this.visitorType= res;

      }
    )



     this.visitorList.getVisitorById(this.route.snapshot.params.id)
      .subscribe(result => {
        this.data = result;
        console.log(this.data);
        this.visitorForm.patchValue(this.data);

      })









  }

  onSubmit(){

      let visitorDetail = this.visitorForm.value

      let filteredType = this.visitorType.filter(type => visitorDetail.visitorType.type === type.type)


      visitorDetail.visitorType = filteredType[0];

      this.visitorList.updateVisitorById(this.route.snapshot.params.id, visitorDetail)
        .subscribe(
          res => {
            console.log(`Updated Result ${res}`);
            this.router.navigate(['/visitor'])
          },
          err => {
            console.log(err);
          }
        )

  }

}
