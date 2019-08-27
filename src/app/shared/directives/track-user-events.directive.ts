import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[trackUserEvents]' //tslint:disable-line
})
export class TrackUserEventsDirective implements OnInit {
  @Input() seconds: number;

  constructor() { }

  ngOnInit() {
    console.log(this.seconds);
  }

}
