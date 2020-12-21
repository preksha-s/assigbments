import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'login', component: LoginpageComponent },
  // ,
  { path: 'registration', component: ValidationComponent },
  //{path:'registration',redirectTo:'/login',pathMatch:'full'}
  {path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [LoginpageComponent,
  ValidationComponent,
  PagenotfoundComponent];