import { Directive,HostBinding } from '@angular/core';

@Directive({
  selector: '[appToUpper]'
})
export class ToUpperDirective {

  constructor() { }
@HostBinding('class') myclass = 'uppercase';
}
