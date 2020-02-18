import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('highlight')
  isHighlighted = false;

  constructor() {
    console.log('highlight');
  }

  @HostBinding('class.highlighted')
  get cssClass() {
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return !this.isHighlighted;
  }

}
