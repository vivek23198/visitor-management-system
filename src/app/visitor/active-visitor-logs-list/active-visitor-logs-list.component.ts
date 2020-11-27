import { Component, OnInit } from '@angular/core';
import { LogsServices } from '../../Services/logs.service';

@Component({
  selector: 'app-active-visitor-logs-list',
  templateUrl: './active-visitor-logs-list.component.html',
  styleUrls: ['./active-visitor-logs-list.component.css']
})
export class ActiveVisitorLogsListComponent implements OnInit {

  visitorLogsList: any[];

  constructor(private visitorLogs: LogsServices) { }

  ngOnInit() {

    this.visitorLogs.getAllLogs()
      .subscribe(
        data => {
          console.log(data);
          this.visitorLogsList = Object.assign(data);
        }
      )
  }

  getFilteredLogs(){
    return this.visitorLogsList?.filter(x => x.activityStatus.toLowerCase() === 'in'.toLowerCase())
  }

  inActive(logDetail){
    console.log(logDetail.logId);
    console.log(logDetail);
    let updatedLogDetail = logDetail
    updatedLogDetail.activityStatus = "out"
    this.visitorLogs.updateLogsById(logDetail.logId, updatedLogDetail)
      .subscribe(
        data => {
          console.log("Data edited Successfully !!");
          console.log(data);
          this.visitorLogsList = this.getFilteredLogs();
        }
      )
  }


}
