import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxSlimDropdownModule } from 'ngx-slim-dropdown';


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
