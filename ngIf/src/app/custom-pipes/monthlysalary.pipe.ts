import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthlysalary'
})
export class MonthlysalaryPipe implements PipeTransform {

  transform(value:any) :any{
    console.log(value);
  
    if(value){
      value=value/12;
      return value;
   
    }
  }

}
