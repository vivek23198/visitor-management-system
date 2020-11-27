import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { visitorLogs } from '../visitor-model/visitorLogs';
import { LogsServices } from '../../Services/logs.service';
import { visitorListService } from 'src/app/Services/visitorList.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  visitorLogs: FormGroup
  visitorLogsList: any;
  id : any;
  activityStatus: boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private logsService: LogsServices,
              private visitorListService: visitorListService,
              private router: Router) { }

  ngOnInit() {

    this.visitorLogs = this.fb.group({

      purpose: ['', Validators.required],
      whomToMeet: ['', Validators.required]
    })

    this.id = this.route.snapshot.params['id'];

    this.visitorListService.getVisitorById(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.visitorLogsList = Object.assign(data);
          console.log(this.visitorLogsList)

        }
      )

      this.logsService.activityStatus(this.id)
        .subscribe(
        data => {

            this.activityStatus = true;
          },
          err => {
            console.log(err)
            //alert("Visitor is Already in !!")
            this.activityStatus = false;
          }
        )
  }


  onSubmit(){

    console.log(this.visitorLogs.value);
    console.log(this.route.snapshot.params.id);

    let logDetail = this.visitorLogs.value;
    logDetail.activityStatus = 'in';

   this.logsService.postLogsById(this.route.snapshot.params.id, logDetail)
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['/activeVisitor'])
        })

  }

}
