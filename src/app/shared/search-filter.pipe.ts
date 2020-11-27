import { Pipe, PipeTransform } from '@angular/core';
import { visitor } from '../visitor/visitor-model/visitor';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(visitor: visitor[], searchValue: string): visitor[] {


    if(!visitor || !searchValue){
      return visitor;
    }

    return visitor.filter(visitor =>
        visitor.visitorName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        visitor.phoneNo.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        visitor.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        visitor.companyName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        visitor.visitorType.type.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        );
  }

}
