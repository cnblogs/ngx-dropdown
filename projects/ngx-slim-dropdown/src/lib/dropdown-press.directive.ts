import { Directive, Host, ElementRef, Renderer2, OnDestroy, HostListener } from '@angular/core';
import { DropdownCloseble } from './dropdown-closeble.directive';
import { DropdownDirective } from './Dropdown';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appDropdownPress]'
})
export class DropdownPressDirective extends DropdownCloseble implements OnDestroy {

  constructor(
    @Host() dropdown: DropdownDirective,
    elementRef: ElementRef,
    render: Renderer2
  ) {
    super(dropdown, elementRef, render);
  }

  @HostListener('press')
  openDropdown() {
    if (this.dropdown.isOpened()) {
      this.close();
    } else {
      this.open();
    }
  }

  ngOnDestroy() {
    this.removeListenerToDocClick();
  }

}
