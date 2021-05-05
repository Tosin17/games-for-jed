import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EMPTY, interval, merge, Subject } from "rxjs";
import {
  debounceTime,
  map,
  scan,
  startWith,
  switchMap,
  tap,
} from "rxjs/operators";

type State = {
  count: boolean;
  value: number;
  countUp: boolean;
  increase: number;
  speed: number;
};

@Component({
  selector: "app-stop-watch",
  templateUrl: "./stop-watch.component.html",
  styleUrls: ["./stop-watch.component.scss"],
})
export class StopWatchComponent {
  setToCtrl = new FormControl("0");
  increaseCtrl = new FormControl("1");
  speedCtrl = new FormControl("1000");

  startSub = new Subject();
  pauseSub = new Subject();
  resetSub = new Subject();
  countUpSub = new Subject();
  stopWatch: State;

  start() {
    this.startSub.next({ count: true });
  }

  pause() {
    this.pauseSub.next({ count: false });
  }

  reset() {
    this.resetSub.next({ value: 0 });
  }

  countUp() {
    this.countUpSub.next({ countUp: true });
  }

  countDown() {
    this.countUpSub.next({ countUp: false });
  }

  setTo$ = this.setToCtrl.valueChanges.pipe(
    debounceTime(500),
    map((v) => ({ value: Number(v) }))
  );

  increase$ = this.increaseCtrl.valueChanges.pipe(
    debounceTime(500),
    map((v) => ({ increase: Number(v) }))
  );

  speed$ = this.speedCtrl.valueChanges.pipe(
    debounceTime(500),
    map((v) => ({ speed: Number(v) }))
  );

  streams$ = merge(
    this.setTo$,
    this.increase$,
    this.speed$,
    this.startSub,
    this.pauseSub,
    this.resetSub,
    this.countUpSub
  )
    .pipe(
      startWith({
        count: false,
        value: 0,
        countUp: true,
        increase: 1,
        speed: 1000,
      }),
      scan((state, curr) => ({ ...state, ...curr }), {}),
      switchMap((state: State) =>
        state.count
          ? interval(state.speed).pipe(
              tap((_) =>
                state.countUp
                  ? (state.value += state.increase)
                  : (state.value -= state.increase)
              ),
              tap((_) => (this.stopWatch = state))
            )
          : EMPTY
      )
    )
    .subscribe();
}
