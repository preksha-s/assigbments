import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, AbstractControl } from '@angular/forms';
import {Router} from '@angular/router';
import { RegistrationServiceService } from '../services/registration-service.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public loginForm:FormGroup;
  user: { isUser: boolean; };

  // data:any;
   // arrayData:any;

  constructor(private fb:FormBuilder,private registrationServiceService:RegistrationServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
         email:['',[Validators.required,Validators.minLength(5), this.emailValidation.bind(this)]],
         password:['',[Validators.required,Validators.maxLength(6)]]


    });
  }
  emailValidation(control: AbstractControl) {
    if (control.value) {
      const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!control.value.match(pattern) && control.value !== '') {
        return { invalidEmail: true };
      
      }
      return null;
    }
  }
  authenticate(){
  this.user=  this.registrationServiceService.getLoginbtn(this.loginForm.value) ;  
  console.log(this.user);
  

}

onClickRegister(){
  this.router.navigate(['./registration']);
  
  
}  
}
