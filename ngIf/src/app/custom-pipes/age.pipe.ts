import { Pipe, PipeTransform } from '@angular/core';
import { MonthlysalaryPipe } from './monthlysalary.pipe';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
   console.log(value);
    let currentYear:any=new Date().getFullYear();//2020
    let userBirthYear:any=new Date(value).getFullYear();
  
    let userAge=currentYear-userBirthYear;
   return userAge;

  }

}
