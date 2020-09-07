import { Injectable } from "@angular/core";

declare const ga: Function;

@Injectable({
  providedIn: "root",
})
export class GoogleAnalyticsEventsService {
  constructor() {}

  emit(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    ga("send", "event", {
      eventCategory,
      eventAction,
      eventLabel,
      eventValue,
    });
  }
}
