import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { SidebarComponent } from './composants/sidebar/sidebar.component';
import { BadgesComponent } from './composants/badges/badges.component';
import { XpComponent } from './composants/xp/xp.component';
import { ResumeComponent } from './composants/resume/resume.component';
import { MainpageComponent } from './composants/mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SidebarComponent,
    BadgesComponent,
    XpComponent,
    ResumeComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
