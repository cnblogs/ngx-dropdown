import { ElementRef, EventEmitter } from '@angular/core';
import { DropdownNotClosableZoneDirective } from './DropdownNotClosableZone';
export declare class DropdownDirective {
    private elementRef;
    toggleClick: boolean;
    activateOnFocus: boolean;
    onOpen: EventEmitter<{}>;
    onClose: EventEmitter<{}>;
    notClosableZone: DropdownNotClosableZoneDirective;
    constructor(elementRef: ElementRef);
    open(): void;
    close(): void;
    isOpened(): boolean;
    isInClosableZone(element: HTMLElement): boolean;
}
