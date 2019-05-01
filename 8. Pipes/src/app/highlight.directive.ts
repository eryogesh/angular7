import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'   // It's the brackets ([]) that make it an attribute selector.
})
export class HighlightDirective {
  // custom attribute directive

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }

}
