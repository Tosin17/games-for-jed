import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, interval, merge, empty, combineLatest, Observable } from 'rxjs';
import { mapTo, startWith, switchMap, scan, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements AfterViewInit {
  @ViewChild('pauseTimer', { static: false }) pauseTimer: ElementRef;
  @ViewChild('resumeTimer', { static: false }) resumeTimer: ElementRef;
  @ViewChild('redBtn', { static: false }) redBtn: ElementRef;
  @ViewChild('blueBtn', { static: false }) blueBtn: ElementRef;
  private readonly COUNT_INIT: number = 10;
  remainingTime: number = this.COUNT_INIT;
  blueCount = 0; redCount = 0; totalCount = 0;

  constructor() { }

  ngAfterViewInit() {
    this.setupTimer();
    this.setupColorMixer();
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
    const increment = (obs: Observable<number>) => {
      return obs.pipe(
        mapTo(1),
        scan((acc, curr) => acc + curr, 0),
        startWith(0)
      );
    };
    const redBtn = increment(fromEvent(this.redBtn.nativeElement, 'click'));
    const blueBtn = increment(fromEvent(this.blueBtn.nativeElement, 'click'));

    combineLatest(redBtn, blueBtn)
      .subscribe(([redCount, blueCount]: any) => {
        this.redCount = redCount;
        this.blueCount = blueCount;
        this.totalCount = blueCount + redCount;
      });
  }
}
