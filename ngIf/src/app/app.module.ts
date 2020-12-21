import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { AgePipe } from './custom-pipes/age.pipe';
import { MonthlysalaryPipe } from './custom-pipes/monthlysalary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipesComponent,
    AgePipe,
    MonthlysalaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
