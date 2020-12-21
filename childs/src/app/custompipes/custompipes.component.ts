import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent  {
  employees :any[]=[
    {code:"emp101",name:"heena",gender:"male",annualsalary:5500,dateOfBirth:'6/3/1982'},
    {code:"emp102",name:"shwetha",gender:"male",annualsalary:5300,dateOfBirth:'8/7/19831983'},
    {code:"emp103",name:"sdja",gender:"male",annualsalary:5200,dateOfBirth:'10/6/1984'},
    {code:"emp104",name:"massd",gender:"female",annualsalary:5100,dateOfBirth:'12/4/1985'}
  ];
  constructor(){}
  
    
  ngOnInit(): void {
  }


}
