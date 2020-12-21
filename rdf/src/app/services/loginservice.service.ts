import { getLocaleNumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public ud = [];

  constructor() { }
  getLoginbtn(sdata) {
    console.log(sdata);
    this.ud.push(sdata);

  }
  getLogindata() {
    console.log(this.ud);
    const cd = this.ud.find(mail => mail.email == 'preksha@gmail.com');
    if (cd) {
      this.ud.push(cd);
      console.log("hello");
    } else {
      console.log("user not found");
    }


  }


}
//let  cd =this.ud.find(this.ud.email=='preksha@gmail.com');
  //console.log(cd);
  // if(val.email===true){
  //   return "hello";
  // }else{
  //   return "user not found"
  // }