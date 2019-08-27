import { Component, OnInit } from '@angular/core';
import { TrackUserEventsService } from '../app/shared/services/track-user-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private trackUserService: TrackUserEventsService) { }

  ngOnInit() {
    this.trackUserService.initializeEventsTracker();
  }
}
