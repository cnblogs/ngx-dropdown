import { Directive, Renderer2, ElementRef, OnDestroy, Host, HostListener } from '@angular/core';
import { DropdownDirective } from './Dropdown';
import { DropdownCloseble } from './dropdown-closeble.directive';

@Directive({
  selector: '[appDropdownOpen]'
})
export class DropdownOpenDirective extends DropdownCloseble implements OnDestroy {

  // -------------------------------------------------------------------------
  // Private Properties
  // -------------------------------------------------------------------------

  /**
   * This hack is needed for dropdown not to open and instantly closed
   */
  private openedByFocus = false;

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(
    @Host() dropdown: DropdownDirective,
    elementRef: ElementRef,
    render: Renderer2) {
    super(dropdown, elementRef, render);
  }

  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------

  @HostListener('click')
  openDropdown() {
    if (this.dropdown.activateOnFocus && this.openedByFocus) {
      this.openedByFocus = false;
      return;
    }

    if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
      this.close();
    } else {
      this.open();
    }
  }

  // @HostListener('keydown', ['$event'])
  // dropdownKeydown(event: KeyboardEvent) {
  //     if (event.keyCode === 40) { // down
  //         this.openDropdown();
  //     }
  // }

  @HostListener('focus')
  onFocus() {
    if (!this.dropdown.activateOnFocus) {
      return;
    }
    this.openedByFocus = true;
    this.dropdown.open();
    this.listenToDocumentClick();
  }

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    if (!this.dropdown.activateOnFocus) {
      return;
    }
    if (event.relatedTarget &&
      !this.dropdown.isInClosableZone(<HTMLElement>event.relatedTarget) &&
      event.relatedTarget !== this.elementRef.nativeElement) {

      this.dropdown.close();
      this.removeListenerToDocClick();
    }
  }

  // -------------------------------------------------------------------------
  // Lifecycle Methods
  // -------------------------------------------------------------------------

  ngOnDestroy() {
    this.removeListenerToDocClick();
  }
}
