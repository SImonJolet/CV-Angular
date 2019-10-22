import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./composants/home/home.component";
import { NavBarComponent } from "./composants/nav-bar/nav-bar.component";
import { SidebarComponent } from "./composants/sidebar/sidebar.component";
import { BadgesComponent } from "./composants/badges/badges.component";
import { XpComponent } from "./composants/xp/xp.component";
import { ResumeComponent } from "./composants/resume/resume.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "navbar", component: NavBarComponent },
  { path: "Info", component: SidebarComponent },
  { path: "Badges", component: BadgesComponent },
  { path: "xp", component: XpComponent },
  { path: "Resume", component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
