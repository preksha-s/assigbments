import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationServiceService } from './services/registration-service.service';

import { LoginserviceService } from './services/loginservice.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
   
   PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   
    
  ],
  providers: [RegistrationServiceService,LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
