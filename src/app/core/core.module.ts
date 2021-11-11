import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {EmployeeService } from './employee.service';

@NgModule({
    imports: [ ],
    providers: [ EmployeeService ],
    exports: [ CoreModule ]
})
export class CoreModule { }