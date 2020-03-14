import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroTitleComponent } from './modules/shared/intro-title/intro-title.component';
import { RecruiterMenuComponent } from './modules/shared/recruiter-menu/recruiter-menu.component';
import { CandidateRegistrationPage1Component } from './modules/candidate-registration-page1/candidate-registration-page1.component';
import { SignupPageComponent } from './modules/signup-page/signup-page.component';
import { SigninPageComponent } from './modules/signin-page/signin-page.component';
import { CvAnalysisComponent } from './modules/cv-analysis/cv-analysis.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InputBoxComponentComponent } from './modules/shared/input-box-component/input-box-component.component';
import { AssignboardComponent } from './modules/assignboard/assignboard.component';
import { RejectedcvComponent } from './modules/rejectedcv/rejectedcv.component';
import { InviteComponent } from './modules/invite/invite.component';
import { NotificationComponent } from './modules/notification/notification.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { TextBoxComponent } from './modules/shared/text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroTitleComponent,
    RecruiterMenuComponent,
    CandidateRegistrationPage1Component,
    SignupPageComponent,
    SigninPageComponent,
    CvAnalysisComponent,
    routingComponents,
    DashboardComponent,
    InputBoxComponentComponent,
    AssignboardComponent,
    RejectedcvComponent,
    InviteComponent,
    NotificationComponent,
    SettingsComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

