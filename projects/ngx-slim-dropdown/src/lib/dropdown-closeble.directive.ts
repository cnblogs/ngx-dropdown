import { Host, ElementRef, Renderer2 } from '@angular/core';
import { DropdownDirective } from './Dropdown';

export class DropdownCloseble {

  private listener: () => void;

  private closeDropdownOnOutsideClick: (event: Event) => void;

  constructor(
    @Host() public dropdown: DropdownDirective,
    protected elementRef: ElementRef,
    protected render: Renderer2) {
    const _this = this;
    this.closeDropdownOnOutsideClick = function closeDropdownOnOutsideClick(event: MouseEvent) {
      _this.closeIfInClosableZone(event);
    };
  }

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

  private closeIfInClosableZone(event: Event) {
    if (!this.dropdown.isInClosableZone(<HTMLElement>event.target)
      && event.target !== this.elementRef.nativeElement
      && !this.elementRef.nativeElement.contains(event.target)) {
      this.dropdown.close();
      this.removeListenerToDocClick();
    }
  }

  public listenToDocumentClick() {
    this.listener = this.render.listen('document', 'click', this.closeDropdownOnOutsideClick);
  }

  public removeListenerToDocClick() {
    if (this.listener) {
      this.listener();
    }
  }

}
