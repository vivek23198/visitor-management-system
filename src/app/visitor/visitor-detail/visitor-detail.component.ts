import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { visitorListService } from '../../Services/visitorList.service';
import { NgForm } from '@angular/forms';
import { LogsServices } from '../../Services/logs.service'
import { visitorLogs } from '../visitor-model/visitorLogs';

@Component({
  selector: 'app-visitor-detail',
  templateUrl: './visitor-detail.component.html',
  styleUrls: ['./visitor-detail.component.css']
})
export class VisitorDetailComponent implements OnInit {
   data: any;
  id: any;
  visitorLogsById: visitorLogs[]
  LogStatus: string;

  constructor(private route: ActivatedRoute,
              private visitorListService: visitorListService,
              private visitorLogs: LogsServices,
              private router :Router) { }

  ngOnInit(){

    this.id = this.route.snapshot.params['id'];
    this.getVisitorById();
    this.getVisitorLogsById();
  }

  getVisitorLogsById(){
    this.visitorLogs.getLogsById(this.id)
      .subscribe(
        data => {
          this.visitorLogsById = data;
          console.log(this.visitorLogsById);
        }
      )
  }

  getVisitorById(){
    this.visitorListService.getVisitorById(this.id)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);

        }
      )
  }

  onDelete(id){

    this.visitorListService.DeleteVisitorById(id)
      .subscribe(
        res => {

          console.log(`Successfully Deleted`);
          this.router.navigate(['/visitor']);

        }
      )
  }

}
