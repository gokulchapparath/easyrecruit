import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assigndata } from '../assignboard';


@Injectable({
  providedIn: 'root'
})
export class AssignboardService {
  private _url: string = "/assets/data/assignboard.json";
  // public httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  constructor(private http: HttpClient) { }
  // readonly url="./modules/cv-analysis/tabledata.json";
  getData(): Observable<Assigndata[]> 
  {
    return this.http.get<Assigndata[]>(this._url);
  }

  // getId(id: number): Observable<Assigndata> {
  //   const url = `${this._url}/${id}`;
  //   return this.http.get<Assigndata>(url);
  // }

  // updateStatus (hero: Assigndata): Observable<any> {
    
  //   return this.http.put(this._url, hero, this.httpOptions);
  // }
  
}
