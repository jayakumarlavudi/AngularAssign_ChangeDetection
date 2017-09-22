import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppArrCompComponent } from './app-arr-comp/app-arr-comp.component';
import { ToUpperDirective } from './to-upper.directive';
import { AppVisibilityDirective } from './app-visibility.directive';
import { MyColorDirective } from './my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppArrCompComponent,
    ToUpperDirective,
    AppVisibilityDirective,
    MyColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
