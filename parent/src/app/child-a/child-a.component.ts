import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
  message: any;
  
  ngOnInit(): void {
 
  }
  recieveMessage(msg){
    this.message=msg;

  }
  constructor() { }

 

}
