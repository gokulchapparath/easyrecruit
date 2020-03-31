import { SettingsComponent } from './modules/settings/settings.component';
import { NotificationComponent } from './modules/notification/notification.component';
import { InviteComponent } from './modules/invite/invite.component';
import { RejectedcvComponent } from './modules/rejectedcv/rejectedcv.component';
import { AssignboardComponent } from './modules/assignboard/assignboard.component';
import { SignupPageComponent } from './modules/signup-page/signup-page.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CvAnalysisComponent } from './modules/cv-analysis/cv-analysis.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninPageComponent } from './modules/signin-page/signin-page.component';


const routes: Routes = [
  {
path:'settings',
component:SettingsComponent
  },
  {
path:'notification',
component:NotificationComponent
  },
  {
path:'invite',
component:InviteComponent
  },
  {
    path:'rejectedcv',
    component:RejectedcvComponent
  },
  {
path:'assignboard',
component:AssignboardComponent
  },
  {
    path: 'cvanalysis',
    component: CvAnalysisComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path:'signin',
    component:SigninPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SigninPageComponent,SettingsComponent,NotificationComponent,InviteComponent,AssignboardComponent,RejectedcvComponent,CvAnalysisComponent,DashboardComponent,SignupPageComponent]