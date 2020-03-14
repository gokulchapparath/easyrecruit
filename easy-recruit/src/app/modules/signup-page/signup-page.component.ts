import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor() { }

  public type=["text","tel"];
  public Placeholder=["Your Good Name","Your Mobile Number","Your Company Designation"];
  public Label=["Name","Mobile Number","Company Designation"];
  ngOnInit(): void {
  }

}
