import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, interval, merge, empty } from 'rxjs';
import { mapTo, startWith, switchMap, scan, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements AfterViewInit {
  @ViewChild('pauseTimer', { static: false }) pauseTimer: ElementRef;
  @ViewChild('resumeTimer', { static: false }) resumeTimer: ElementRef;
  private readonly COUNT_INIT: number = 10;
  private remainingTime: number = this.COUNT_INIT;

  constructor() { }

  ngAfterViewInit() {
    this.setupTimer();
  }

  setupTimer() {
    const interval$ = interval(1000).pipe(mapTo(-1));
    const pause$ = fromEvent(this.pauseTimer.nativeElement, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(this.resumeTimer.nativeElement, 'click').pipe(mapTo(true));

    merge(pause$, resume$)
      .pipe(
        startWith(true),
        switchMap(val => val ? interval$ : empty()), // tslint:disable-line
        scan((acc, curr) => acc + curr, this.COUNT_INIT),
        takeWhile(val => val >= 0)
      ).subscribe(val => {
        this.remainingTime = val;
      });
  }

  setupColorMixer() {

  }

}
