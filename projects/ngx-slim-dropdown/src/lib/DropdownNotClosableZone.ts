import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appDropdownNotClosableZone]'
})
export class DropdownNotClosableZoneDirective {

  @Input()
  dropdownNotClosabledZone: boolean;

  constructor(private elementRef: ElementRef) {
  }

  contains(element: HTMLElement) {
    if (this.dropdownNotClosabledZone === false) {
      return false;
    }

    const thisElement: HTMLElement = this.elementRef.nativeElement;
    return thisElement.contains(element);
  }
}
