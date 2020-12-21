import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgePipe } from './custom/age.pipe';
import { CustompipeComponent } from './custom/custompipe/custompipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    CustompipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
