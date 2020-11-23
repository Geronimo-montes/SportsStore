import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return  this.http.get("https://reqres.in/api/users?page=2");
  }

  getPrueba(): Observable<any> {
    return  this.http.get("http://sistemaevaluacion//diagnostico/1");
  }
}
