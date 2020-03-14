import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mydashboardstyle="border-left: 5px solid rgb(245,40,81,100%);"
  constructor() { }

  ngOnInit(): void {
  }

}
