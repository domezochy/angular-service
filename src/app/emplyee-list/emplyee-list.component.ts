import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeService } from '../core/employee.service';
import { IEmployee } from '../shared/interfaces';

@Component({
  selector: 'app-emplyee-list',
  templateUrl: './emplyee-list.component.html', 
styles: []
})
export class EmplyeeListComponent implements OnInit {

  public employees: any[];

  constructor(private employeeService: EmployeeService) { 
      }
  ngOnInit() {
    
        this.employeeService.getEmployee()
        .subscribe( data=> this.employees = data);
  }

}
