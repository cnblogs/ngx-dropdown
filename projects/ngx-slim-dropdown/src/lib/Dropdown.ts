import { Directive, Renderer2, ElementRef, ContentChild, Output, EventEmitter, Input } from '@angular/core';
import { DropdownNotClosableZoneDirective } from './DropdownNotClosableZone';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // -------------------------------------------------------------------------
  // Inputs / Outputs
  // -------------------------------------------------------------------------

  // tslint:disable-next-line:no-input-rename
  @Input('dropdownToggle')
  toggleClick = true;

  // tslint:disable-next-line:no-input-rename
  @Input('dropdownFocusActivate')
  activateOnFocus = false;

  @Output() inOpen = new EventEmitter();

  @Output() inClose = new EventEmitter();

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
    this.inOpen.emit(undefined);
  }

  close() {
    this.render.removeClass(this.elementRef.nativeElement, 'open');
    this.inClose.emit(undefined);
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
