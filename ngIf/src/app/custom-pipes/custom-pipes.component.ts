import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {
 employees :any[];
  constructor() {
      this.employees=   [
    {code:"emp101",name:"heena",gender:"male",annualsalary:5500,dateOfBirth:'6/3/1982'},
    {code:"emp102",name:"shwetha",gender:"male",annualsalary:5300,dateOfBirth:'8/7/1983'},
    {code:"emp103",name:"sdja",gender:"male",annualsalary:5200,dateOfBirth:'10/6/1984'},
    {code:"emp104",name:"massd",gender:"female",annualsalary:5100,dateOfBirth:'12/4/1985'}
  ];

   }

  ngOnInit(): void {
  }

}
