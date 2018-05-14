import { Directive, Renderer2, ElementRef, ContentChild, Output, EventEmitter, Input } from '@angular/core';
import { DropdownNotClosableZoneDirective } from './DropdownNotClosableZone';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // -------------------------------------------------------------------------
  // Inputs / Outputs
  // -------------------------------------------------------------------------

  @Input('dropdownToggle')
  toggleClick = true;

  @Input('dropdownFocusActivate')
  activateOnFocus = false;

  @Output()
  onOpen = new EventEmitter();

  @Output()
  onClose = new EventEmitter();

  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------

  @ContentChild(DropdownNotClosableZoneDirective)
  notClosableZone: DropdownNotClosableZoneDirective;

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------

  open() {
    this.render.addClass(this.elementRef.nativeElement, 'open');
    this.onOpen.emit(undefined);
  }

  close() {
    this.render.removeClass(this.elementRef.nativeElement, 'open');
    this.onClose.emit(undefined);
  }

  isOpened() {
    const element: HTMLElement = this.elementRef.nativeElement;
    return element.classList.contains('open');
  }

  isInClosableZone(element: HTMLElement) {
    if (!this.notClosableZone) {
      return false;
    }

    return this.notClosableZone.contains(element);
  }

}
