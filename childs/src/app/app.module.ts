import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FormsModule } from '@angular/forms';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { AgePipe } from './custompipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    CustompipesComponent,
    AgePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
