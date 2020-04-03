import { Component, OnInit } from '@angular/core';
import {AssignboardService} from 'src/app/services/assignboard.service';
@Component({
  selector: 'app-assignboard',
  templateUrl: './assignboard.component.html',
  styleUrls: ['./assignboard.component.scss']
})
export class AssignboardComponent implements OnInit {

  constructor(private _AssignboardService : AssignboardService) { }
  public list=[];
  ngOnInit(): void {
    this._AssignboardService.getData()
    .subscribe(data =>this.list=data);
  }
  mydashboardstyle="border-left: 5px solid rgb(245,40,81,100%);"
}
