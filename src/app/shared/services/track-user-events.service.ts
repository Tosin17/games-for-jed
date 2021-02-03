import { Injectable } from '@angular/core';
import { fromEvent, merge, interval } from 'rxjs';
import {
  switchMap,
  scan,
  takeWhile,
  startWith,
  mapTo,
  tap,
} from 'rxjs/operators';

const l = console.log;

@Injectable({
  providedIn: 'root',
})
export class TrackUserEventsService {
  private readonly COUNT_IN_SECONDS: number = 30000;

  initializeEventsTracker(): void {
    const interval$ = interval(1000).pipe(mapTo(1));

    const keyboard$ = fromEvent(document, 'keyup');
    const click$ = fromEvent(document, 'click');
    const mousemove$ = fromEvent(document, 'mousemove');

    merge(keyboard$, click$, mousemove$)
      .pipe(
        startWith(interval$),
        switchMap(() => interval$.pipe(scan((acc, curr) => acc + curr))),
        takeWhile((tick) => tick <= this.COUNT_IN_SECONDS),
        tap((tick) => {
          if (tick === this.COUNT_IN_SECONDS - 10) {
            l('Are you still there?'); // Open modal
          } else if (tick === this.COUNT_IN_SECONDS) {
            l('You have been logged out') // Log out
          }
        })
      )
      .subscribe();
  }
}
