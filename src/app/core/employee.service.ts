import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IEmployee } from '../shared/interfaces';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = 'assets/emloyees.json';

  constructor(private http: HttpClient) { }
  
  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
//    .pipe(
//      catchError(this.handleError)
//      );
  }
//  errorhandler(error: HttpErrorResponse){
//    return Observable.throw(error.message || "Server Error");
//  }



//use method without Observable
  /*  getEmployees() {
  return [
    { "id": 1, "name": "Godfrey", "age": 35 },
    { "id": 2, "name": "Peter", "age": 32 },
    { "id": 3, "name": "Kevin", "age": 50 }  
  ];
  }
*/
}
