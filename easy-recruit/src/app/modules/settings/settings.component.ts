import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  mydashboardstyle="border-left: 5px solid rgb(245,40,81,100%);";
  ngOnInit(): void {
  }

}
