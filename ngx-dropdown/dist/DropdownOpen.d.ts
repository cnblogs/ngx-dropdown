import { ElementRef, OnDestroy } from '@angular/core';
import { DropdownDirective } from './Dropdown';
export declare class DropdownOpenDirective implements OnDestroy {
    dropdown: DropdownDirective;
    private elementRef;
    /**
     * This hack is needed for dropdown not to open and instantly closed
     */
    private openedByFocus;
    private closeDropdownOnOutsideClick;
    constructor(dropdown: DropdownDirective, elementRef: ElementRef);
    toggle(): void;
    open(): void;
    close(): void;
    openDropdown(): void;
    onFocus(): void;
    onBlur(event: FocusEvent): void;
    ngOnDestroy(): void;
    private closeIfInClosableZone(event);
}
