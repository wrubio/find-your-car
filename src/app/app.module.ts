import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarBrandsComponent } from './components/shared/car-brands/car-brands.component';
import { CarInputEventComponent } from './components/shared/car-input-event/car-input-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarBrandsComponent,
    CarInputEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
