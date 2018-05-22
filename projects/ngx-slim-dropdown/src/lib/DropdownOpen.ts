import { Directive, Renderer2, ElementRef, OnDestroy, Host, HostListener } from '@angular/core';
import { DropdownDirective } from './Dropdown';

@Directive({
  selector: '[appDropdownOpen]'
})
export class DropdownOpenDirective implements OnDestroy {

  // -------------------------------------------------------------------------
  // Private Properties
  // -------------------------------------------------------------------------

  /**
   * This hack is needed for dropdown not to open and instantly closed
   */
  private openedByFocus = false;

  private closeDropdownOnOutsideClick: (event: Event) => void;

  private listener: () => void;

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(
    @Host() public dropdown: DropdownDirective,
    private elementRef: ElementRef,
    private render: Renderer2) {
    const _this = this;
    this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event: MouseEvent) {
      _this.closeIfInClosableZone(event);
    };
  }

  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------

  toggle() {
    if (this.dropdown.isOpened()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (this.dropdown.isOpened()) {
      return;
    }

    this.dropdown.open();
    this.listenToDocumentClick();
  }

  close() {
    if (!this.dropdown.isOpened()) {
      return;
    }

    this.dropdown.close();
    this.removeListenerToDocClick();
  }

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

  // -------------------------------------------------------------------------
  // Private Methods
  // -------------------------------------------------------------------------

  private closeIfInClosableZone(event: Event) {
    if (!this.dropdown.isInClosableZone(<HTMLElement>event.target)
      && event.target !== this.elementRef.nativeElement
      && !this.elementRef.nativeElement.contains(event.target)) {
      this.dropdown.close();
      this.removeListenerToDocClick();
    }
  }


  private listenToDocumentClick() {
    this.listener = this.render.listen('document', 'click', this.closeDropdownOnOutsideClick);
  }

  private removeListenerToDocClick() {
    if (this.listener) {
      this.listener();
    }
  }
}
