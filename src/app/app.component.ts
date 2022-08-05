import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'together';
  private _url:string="/src/assets/data/employees.json";

  constructor(private http:HttpClient){}

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

}
