import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {
  // creat a variable message
  //call output and event emitter
  //call function to send message from child->parent
  message:string="hello prekshaa"
  @Output() messageEvent=new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit(this.message)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
