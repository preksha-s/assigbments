import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
enterName;
parentData="";

TransfrData(){
  this.parentData=this.enterName;  
}
  constructor() { }

  ngOnInit(): void {
  }
  tart(value){
    console.log(value);
  }



}
