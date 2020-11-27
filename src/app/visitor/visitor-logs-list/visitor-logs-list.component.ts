import { Component, OnInit } from '@angular/core';
import { visitorLogs } from '../visitor-model/visitorLogs';
import { LogsServices } from '../../Services/logs.service';

@Component({
  selector: 'app-visitor-logs-list',
  templateUrl: './visitor-logs-list.component.html',
  styleUrls: ['./visitor-logs-list.component.css']
})
export class VisitorLogsListComponent implements OnInit {

   visitorLogsList: any[];
   searchValue: string;
   filteredVenues: any;

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

  filterDate(queryDate: Date) {
    console.log(queryDate);
    this.filteredVenues = (queryDate) ?
    this.visitorLogsList.filter(v => v.dateInTime.includes(queryDate.toISOString().split('T')[0])) :
    this.visitorLogsList;
  }


}
