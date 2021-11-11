import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplyeeListComponent } from './emplyee-list/emplyee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './core/employee.service';


@NgModule({
  declarations: [ AppComponent, EmplyeeListComponent, EmployeeDetailComponent ],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
  providers: [ EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
