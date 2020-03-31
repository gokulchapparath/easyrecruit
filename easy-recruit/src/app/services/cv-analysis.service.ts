import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idata } from '../cvanalysis';


@Injectable({
  providedIn: 'root'
})
export class CvAnalysisService {
  private _url:string="/assets/data/cvanaylsis.json";
  constructor(private http: HttpClient) { }
  // readonly url="./modules/cv-analysis/tabledata.json";
  getData():Observable<Idata[]>{
    return this.http.get<Idata[]>(this._url);
  }
}
