import { Component, OnInit } from "@angular/core";
import { TrackUserEventsService } from "../app/shared/services/track-user-events.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private trackUserService: TrackUserEventsService
  ) {
    const global: any = window;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        global.ga("set", "page", event.urlAfterRedirects);
        global.ga("send", "pageview");
      }
    });
  }

  ngOnInit() {
    this.trackUserService.initializeEventsTracker();
  }
}
