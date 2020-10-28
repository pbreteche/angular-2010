import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appParity]'
})
export class ParityDirective implements OnChanges{
  @Input('appParity') parityNumber;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.parityNumber % 2) {
      this.el.nativeElement.classList.add('odd');
    }
    else {
      this.el.nativeElement.classList.remove('odd');
    }
  }
}
