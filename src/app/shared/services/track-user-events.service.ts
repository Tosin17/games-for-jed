import { Injectable } from '@angular/core';
import { fromEvent, merge, interval } from 'rxjs';
import { switchMap, scan, takeWhile, tap, startWith, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackUserEventsService {
  // Number of seconds user has to stay idle before he's logged out
  private readonly COUNT_IN_SECONDS: number = 3600;

  constructor() { }

  initializeEventsTracker() {
    // At 1 second interval, return interval and -1 for counting down
    const interval$ = interval(1000).pipe(map(tick => ({ tick, val: -1 })));

    // Events to track
    const keyboard$ = fromEvent(document, 'keyup');
    const click$ = fromEvent(document, 'click');
    const mousemove$ = fromEvent(document, 'mousemove');
    const scroll$ = fromEvent(document, 'scroll');

    // If any of this event occurs, emit the event
    merge(keyboard$, click$, mousemove$, scroll$).pipe(
      // Start the count down
      startWith(interval$),
      // Reset the timer anytime the user types, scrolls or uses mouse
      switchMap(() => interval$),
      // Calculate the count down by adding -1 + COUNT_IN_SECONDS everytime an evt occurs
      scan((acc, curr: any) => {
        // If `switchMap` restarts the counter, reset the accumulator
        if (curr.tick === 0) {
          acc = this.COUNT_IN_SECONDS;
        }
        return acc + curr.val;
      }, this.COUNT_IN_SECONDS),
      takeWhile(tick => tick >= 0)
    ).subscribe(tick => {
      // When counter completes, log user out or do whatever
      if (tick === 0) {
        console.log('You wonna log out now?');
      }
    });
  }
}
