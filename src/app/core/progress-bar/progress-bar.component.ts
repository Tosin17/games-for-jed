import { Component } from "@angular/core";
import { BehaviorSubject, from, Observable, of, Subject } from "rxjs";
import {
  delay,
  count,
  concatAll,
  scan,
  withLatestFrom,
  map,
  switchMapTo,
  share,
} from "rxjs/operators";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
})
export class ProgressBarComponent {
  streams = [
    of("1st").pipe(delay(300)),
    of("2nd").pipe(delay(600)),
    of("3rd").pipe(delay(800)),
    of("4th").pipe(delay(1100)),
    of("5th").pipe(delay(1500)),
  ];

  sub$ = new BehaviorSubject(true);

  count$ = from(this.streams).pipe(count());
  streams$: Observable<any> = from(this.streams).pipe(concatAll());

  progress$ = this.streams$.pipe(
    scan((a) => a + 1, 0),
    withLatestFrom(this.count$, (acc, count) => acc / count),
    map((v) => `${v * 100}%`),
    share()
  );

  val$ = this.sub$.pipe(switchMapTo(this.progress$));

  start() {
    this.sub$.next(true);
  }
}
