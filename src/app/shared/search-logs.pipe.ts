import { Pipe, PipeTransform } from '@angular/core';
import { visitorLogs } from '../visitor/visitor-model/visitorLogs';

@Pipe({
  name: 'searchLogs'
})
export class SearchLogsPipe implements PipeTransform {

  transform(visitor: visitorLogs[], searchValue: string): any {

    if(!visitor || !searchValue){
      return visitor;
    }

    return visitor.filter(visitor =>
        visitor.visitor.visitorName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        visitor?.date?.toString().toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
        visitor.dateInTime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        visitor?.dateOutTime.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        visitor.whomToMeet.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        );
  }
  }


