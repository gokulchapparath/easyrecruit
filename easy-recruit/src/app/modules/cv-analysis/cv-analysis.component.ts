import { Component, OnInit } from '@angular/core';
import { CvAnalysisService } from 'src/app/services/cv-analysis.service';
// import {tabledata} from './tabledata.json';


@Component({
  selector: 'app-cv-analysis',
  templateUrl: './cv-analysis.component.html',
  styleUrls: ['./cv-analysis.component.scss']
})
export class CvAnalysisComponent implements OnInit {

  constructor(private _cvanalysisservice : CvAnalysisService) { }
  
  public list=[];

  ngOnInit() {
  this._cvanalysisservice.getData()
  .subscribe(data =>this.list=data);
  }
 

  mydashboardstyle="border-left: 5px solid rgb(245,40,81,100%) ;border-top: -100px 0px 0px -100px;";
  Status: string;

public my;
public statusid;
   public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
    this.my = newVal;
    var idAttr = event.srcElement.attributes.id;
    this.statusid = idAttr.nodeValue;
    console.log(this.statusid);
  }
 

}
