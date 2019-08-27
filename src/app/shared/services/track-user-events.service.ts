import { Injectable } from '@angular/core';
import { fromEvent, merge, interval } from 'rxjs';
import { mapTo, switchMap, scan, takeWhile, tap, startWith, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackUserEventsService {
  private readonly COUNT_IN_SECONDS: number = 10;

  constructor() { }

  initializeEventsTracker() {
    // At 1 second interval, return -1. Basically for counting down
    const interval$ = interval(1000).pipe(map(tick => ({ tick, val: -1 })));

    // Events to track
    const keyboard$ = fromEvent(document, 'keyup');
    const click$ = fromEvent(document, 'click');
    const mousemove$ = fromEvent(document, 'mousemove');
    const scroll$ = fromEvent(document, 'scroll');

    merge(keyboard$, click$, mousemove$, scroll$).pipe(
      startWith(interval$),
      switchMap(() => interval$),
      scan((acc, curr: any) => {
        if (curr.tick === 0) {
          acc = this.COUNT_IN_SECONDS;
        }
        return acc + curr.val;
      }, this.COUNT_IN_SECONDS),
      takeWhile(tick => tick >= 0)
    ).subscribe(tick => {
      console.log(tick);
      if (tick === 0) {
        console.log('You wonna log out now?');
      }
    });
  }
}
