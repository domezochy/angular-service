import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeService } from '../core/employee.service';
import { IEmployee } from '../../app/shared/interfaces';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Detail</h2>
  <h3> errorMsg </h3>    
  <ul *ngFor=" let employee of employees" >
    <li> id: {{ employee.id }} </li>
    <li> name: {{ employee.name }} </li>
    <li> age: {{ employee.age }} </li>
  </ul>
`,
styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees: any[];
  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    
    this.employeeService.getEmployee()
      .subscribe((data: IEmployee[]) => this.employees = data);
  
    }
}
