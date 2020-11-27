import { Component, OnInit } from '@angular/core';
import { visitorListService } from '../../Services/visitorList.service';
import { visitor} from '../visitor-model/visitor';



@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {


  listOfVisitors: visitor[];
  searchValue: string;
  activityStatus: string;

  constructor(private visitorListService: visitorListService
   ) { }

  ngOnInit(): void {



    this.visitorListService.getVisitors()
      .subscribe(
        data => {
          console.log(data);
          this.listOfVisitors = data;
        }
      )


  }

}
