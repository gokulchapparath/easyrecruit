import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recruiter-menu',
  templateUrl: './recruiter-menu.component.html',
  styleUrls: ['./recruiter-menu.component.scss']
})
export class RecruiterMenuComponent implements OnInit {
 

  constructor() { }
  mini = true;
  @Input() dashboardstyle;
  @Input() cvanalysisstyle;
  @Input() assignboardstyle;
  @Input() rejectedstyle;
  @Input() invitestyle;
  @Input() notificationstyle;
  @Input() settingstyle;
  toggleSidebar() {
      if (this.mini) {
          console.log("opening sidebar");
          document.getElementById("mySidebar").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
          this.mini = false;
      } else {
          console.log("closing sidebar");
          document.getElementById("mySidebar").style.width = "85px";
          document.getElementById("main").style.marginLeft = "85px";
          this.mini = true;
      }
  }

  ngOnInit(): void {
  }

}
