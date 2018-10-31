import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownNotClosableZoneDirective } from './DropdownNotClosableZone';
import { DropdownDirective } from './Dropdown';
import { DropdownOpenDirective } from './DropdownOpen';
import { DropdownPressDirective } from './dropdown-press.directive';

export * from './DropdownNotClosableZone';
export * from './Dropdown';
export * from './DropdownOpen';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownNotClosableZoneDirective,
    DropdownDirective,
    DropdownOpenDirective,
    DropdownPressDirective,
  ],
  exports: [
    DropdownNotClosableZoneDirective,
    DropdownDirective,
    DropdownOpenDirective,
    DropdownPressDirective
  ]
})
export class NgxSlimDropdownModule {

}
