import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shered/navbar/navbar.component';
import { CarBrandsComponent } from './components/shered/car-brands/car-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarBrandsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
