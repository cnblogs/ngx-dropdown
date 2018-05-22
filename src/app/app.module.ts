import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxSlimDropdownModule } from '../../projects/ngx-slim-dropdown/src/lib/ngx-slim-dropdown.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSlimDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
