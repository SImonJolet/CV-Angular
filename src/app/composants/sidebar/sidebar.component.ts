import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  downloadCv() {
    let link = document.createElement("a");
    link.download = "CV.pdf";
    link.href = "assets/CV.pdf";
    link.click();
  }
}
