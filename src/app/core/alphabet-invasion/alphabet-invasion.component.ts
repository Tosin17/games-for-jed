import { Component } from "@angular/core";
import {
  BehaviorSubject,
  combineLatest,
  fromEvent,
  interval,
  noop,
} from "rxjs";
import {
  switchMap,
  scan,
  startWith,
  map,
  tap,
  take,
  takeWhile,
  finalize,
} from "rxjs/operators";
import { last } from "lodash";

interface ILetters {
  intrvl: number;
  ltrs: any[];
}

interface IState {
  score: number;
  letters: any[];
}

@Component({
  selector: "alphabet-invasion",
  templateUrl: "./alphabet-invasion.component.html",
  styleUrls: ["./alphabet-invasion.component.scss"],
})
export class AlphabetInvasionComponent {
  constructor() {}

  randomLetter = () =>
    String.fromCharCode(
      Math.random() * ("z".charCodeAt(0) - "a".charCodeAt(0)) +
        "a".charCodeAt(0)
    );

  gameWidth = 200;
  threshold = 15;

  keys$ = fromEvent(document, "keydown").pipe(
    startWith({ key: "" }),
    map((e: KeyboardEvent) => e.key)
  );

  intervalSub = new BehaviorSubject(1000);
  gameOverSub = new BehaviorSubject(false);

  letters$ = this.intervalSub.pipe(
    switchMap((i) =>
      interval(i).pipe(
        scan<number, ILetters>(
          (letters) => ({
            intrvl: i,
            ltrs: [
              {
                letter: this.randomLetter(),
                xPos: Math.floor(Math.random() * this.gameWidth),
              },
              ...letters.ltrs,
            ],
          }),
          { intrvl: 0, ltrs: [] }
        )
      )
    )
  );

  game$ = combineLatest(this.keys$, this.letters$).pipe(
    scan<[string, ILetters], IState>(
      (state, [key, letters]) => {
        const latest = last(letters.ltrs);
        latest.letter === key
          ? (letters.ltrs.pop(), (state.score += 1))
          : noop();
        return {
          score: state.score,
          letters: letters.ltrs,
        };
      },
      {
        score: 0,
        letters: [],
      }
    ),
    takeWhile((state) => state.letters.length < 15),
    finalize(() => this.gameOverSub.next(true))
  );
}
