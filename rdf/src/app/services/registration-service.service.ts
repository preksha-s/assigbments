import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  public arrd=[];
  sdata:any;
  data: any;
  constructor() { }
  registerbtn(data){
    this.data=data;
        console.log(data);
        this.arrd.push(data);
 }
   
 getUserdata(){
  return (this.arrd);
  
}
getLoginbtn(sdata){
  console.log(sdata);
  this.sdata=sdata;
  const cd=this.arrd.find(mail=>mail.email==sdata.email && mail.password==sdata.password);
  if(cd) {
    return {isUser:true}
    }else{
      return {isUser:false}
    }
}

getCheck(){

if(this.sdata===this.data){
  return "user found";
}else{
  return "usernotfound";
}
}
// getLogindata(){
// console.log(this.ud);
// const cd=this.ud.find(mail=>mail.email=='preksha@gmail.com');
// if(cd) {
// this.ud.push(cd);
// console.log("hello");
// }else{
// console.log("user not found");
// }


}
