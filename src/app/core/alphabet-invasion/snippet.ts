import { BehaviorSubject, interval, noop } from "rxjs";
import { switchMap, scan, take } from "rxjs/operators";

const log = console.log;

const randomLetter = () => "a";
const gameWidth = 30;

const intervalSub = new BehaviorSubject(600);

const letters$ = intervalSub.pipe(
  switchMap((i) =>
    interval(i).pipe(
      scan<any>(
        (letters, v) => ({
          v,
          intrvl: i,
          ltrs: [
            {
              letter: randomLetter(),
              yPos: Math.floor(Math.random() * gameWidth),
            },
            ...letters.ltrs,
          ],
        }),
        { intrvl: 0, ltrs: [] }
      ),
      take(5)
    )
  )
);

intervalSub.next(600);
letters$.subscribe(log);
