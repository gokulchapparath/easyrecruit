import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idata } from '../cvanalysis';


@Injectable({
  providedIn: 'root'
})
export class CvAnalysisService {
  private _url: string = "/assets/data/cvanaylsis.json";
  // public httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  constructor(private http: HttpClient) { }
  // readonly url="./modules/cv-analysis/tabledata.json";
  getData(): Observable<Idata[]> 
  {
    return this.http.get<Idata[]>(this._url);
  }

  // getId(id: number): Observable<Idata> {
  //   const url = `${this._url}/${id}`;
  //   return this.http.get<Idata>(url);
  // }

  // updateStatus (hero: Idata): Observable<any> {
    
  //   return this.http.put(this._url, hero, this.httpOptions);
  // }
  
}
