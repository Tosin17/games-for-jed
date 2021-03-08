import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import {
  fromEvent,
  interval,
  merge,
  combineLatest,
  Observable,
  EMPTY,
} from "rxjs";
import {
  mapTo,
  startWith,
  switchMap,
  scan,
  takeWhile,
  tap,
} from "rxjs/operators";
import { GoogleAnalyticsEventsService } from "src/app/shared/services/ga-events.service";

@Component({
  selector: "countdown-timer",
  templateUrl: "./countdown-timer.component.html",
  styleUrls: ["./countdown-timer.component.scss"],
})
export class CountdownTimerComponent implements AfterViewInit {
  @ViewChild("pauseTimer", { static: false }) pauseTimer: ElementRef;
  @ViewChild("resumeTimer", { static: false }) resumeTimer: ElementRef;
  @ViewChild("redBtn", { static: false }) redBtn: ElementRef;
  @ViewChild("blueBtn", { static: false }) blueBtn: ElementRef;
  readonly COUNT_INIT: number = 10;
  remainingTime;
  blueCount = 0;
  redCount = 0;
  totalCount = 0;

  constructor(private gaService: GoogleAnalyticsEventsService) {}

  ngAfterViewInit() {
    this.remainingTime = this.setupTimer();
    this.setupColorMixer();
  }

  pause() {
    this.gaService.emit("Pause Category", "Pause Action");
  }

  setupTimer() {
    const interval$ = interval(1000).pipe(mapTo(-1));
    const pause$ = fromEvent(this.pauseTimer.nativeElement, "click").pipe(
      mapTo(false)
    );
    const resume$ = fromEvent(this.resumeTimer.nativeElement, "click").pipe(
      mapTo(true)
    );

    return merge(pause$, resume$).pipe(
      startWith(true),
      switchMap((v) => (v ? interval$ : EMPTY)),
      scan((acc, val) => acc + val, this.COUNT_INIT),
      takeWhile((v) => v >= 0)
    );
  }

  setupColorMixer() {
    const increment = (obs: Observable<number>) => {
      return obs.pipe(
        mapTo(1),
        scan((acc, curr) => acc + curr, 0),
        startWith(0)
      );
    };
    const redBtn = increment(fromEvent(this.redBtn.nativeElement, "click"));
    const blueBtn = increment(fromEvent(this.blueBtn.nativeElement, "click"));

    combineLatest(redBtn, blueBtn).subscribe(([redCount, blueCount]: any) => {
      this.redCount = redCount;
      this.blueCount = blueCount;
      this.totalCount = blueCount + redCount;
    });
  }
}
