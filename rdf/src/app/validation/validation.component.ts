// import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';
import {ActivatedRoute, ParamMap, Router} from  '@angular/router';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  registerForm: FormGroup;
  userdata: any[];

  constructor(private fb: FormBuilder,private  registrationServiceService: RegistrationServiceService,private router:Router) { }


  ngOnInit() {
    console.log("preksha");
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      email: ['', [Validators.required, this.emailValidation.bind(this)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.PasswordValidator.bind(this) });
    //roting for activate route
    // this.route.paramap.subscribe((params:ParamMap)=>{
    //   let id=parseInt(params.get)
    // })
  }




  emailValidation(control: AbstractControl) {
    if (control.value) {
      const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!control.value.match(pattern) && control.value !== '') {
        return { invalidEmail: true };
        console.log(control.value);
      }
      return null;
    }
  }

  PasswordValidator(control: AbstractControl) {
    if (this.registerForm && this.registerForm.get('password').value) {
      let password = this.registerForm.get('password').value;
      let confirmPassword = control.value.confirmPassword;
      // let confirmPassword=this.registerForm.get('confimPassword').value;
      // console.log(password, confirmPassword);
      if (password != confirmPassword) {
        return { 'misMatch': true }      
      }      
    }
    else {
      return null;
    }    
  }

  


  onSubmit() {
    this.registrationServiceService.registerbtn(this.registerForm.value);
  }

  //  onUsersData(){
  //    this.userdata= this.registrationServiceService.getUserdata()
  //    console.log(this.userdata);
  //   
  //  }
  
  // loadApi() {
  //   this.registerForm.patchValue({
  //     name: 'pre',
  //     lastName: 'ksha',
  //     email: '',
  //     password: '',
  //     confirmPassword: ''
  //   });
  // }

  goBacktoLogin(){
    this.router.navigate(['']);
    
  }  
}



// this.check=this.registrationServiceService.getLoginbtn()
// if(this.check===this.userExists){
//   return "userfound";
// }            userExists: { isUser: boolean; };//  check: { isUser: boolean; };


//  this.userExists=this.registrationServiceService.getLoginbtn(this.loginForm.value) ;  
 // this.registerForm.get('name').setValue('preskha')
    // // this.registerForm.get('name').enable();
    //   console.warn(this.registerForm.value);
    // // if(this.registerForm.value!= ''){
    // //   this.registerForm.get('subbtn').disable();
    // // }else{
    // //   this.registerForm.get('subtn').enable();
    // // }
 


    //we can define using thew below method using conndition expression
  // PasswordValidator(control:AbstractControl):{ [key:string]:boolean } | null{
  //   const password =control.get('password');
  //   const confirmPassword=control.get('confirmPassword');
  //   if(password?.pristine||confirmPassword?.pristine){
  //       return null;
  //   }
  //   return password && confirmPassword && password.value !=   confirmPassword.value? {'misMatch':true}:null;
  //   }
