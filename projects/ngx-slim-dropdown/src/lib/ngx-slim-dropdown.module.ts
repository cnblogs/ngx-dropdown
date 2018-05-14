import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownNotClosableZoneDirective } from './DropdownNotClosableZone';
import { DropdownDirective } from './Dropdown';
import { DropdownOpenDirective } from './DropdownOpen';

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
  ],
  exports: [
    DropdownNotClosableZoneDirective,
    DropdownDirective,
    DropdownOpenDirective,
  ]
})
export class NgxSlimDropdownModule {

}
