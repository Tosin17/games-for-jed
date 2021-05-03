import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { concat, defer, EMPTY, merge, of } from "rxjs";
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  mapTo,
  mergeMap,
  share,
  switchAll,
  tap,
} from "rxjs/operators";

@Component({
  selector: "app-save-indicator",
  templateUrl: "./save-indicator.component.html",
  styleUrls: ["./save-indicator.component.scss"],
})
export class SaveIndicatorComponent implements OnInit {
  txtCtrl = new FormControl("", [Validators.required]);
  savesInProgress = 0;
  result$;

  txtCtrl$ = this.txtCtrl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    share()
  );

  saveToBE(val) {
    return of(val).pipe(delay(1000));
  }

  savingInprogress$ = this.txtCtrl$.pipe(
    mapTo(of("Saving")),
    tap(() => (this.savesInProgress += 1))
  );

  saved$ = this.txtCtrl$.pipe(
    mergeMap(this.saveToBE),
    tap((_) => (this.savesInProgress -= 1)),
    filter(() => !this.savesInProgress),
    mapTo(
      concat(
        of("Saved!"),
        EMPTY.pipe(delay(2000)),
        defer(() => of(`Last updated ${new Date().toLocaleDateString()}`))
      )
    )
  );

  ngOnInit() {
    this.result$ = merge(this.savingInprogress$, this.saved$).pipe(switchAll());
  }
}
