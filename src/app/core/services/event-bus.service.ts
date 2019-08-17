import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';


export class EventModel {
  constructor(public name: string, public value: any) { }
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject = new Subject();
  constructor() { }

  on(eventName: string, action: () => any) {
    return this.subject
      .pipe(
        filter((evt: EventModel) => evt.name === eventName),
        map((evt: EventModel) => evt.value || null)
      )
      .subscribe(action);
  }

  emit(event: EventModel) {
    this.subject.next(event);
  }
}
