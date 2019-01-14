import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarBrandsComponent } from './components/shared/car-brands/car-brands.component';
import { CarInputEventComponent } from './components/shared/car-input-event/car-input-event.component';
import { HomeComponent } from './components/home/home.component';
import { CarCardsComponent } from './components/car-cards/car-cards.component';
import { CarComparatorComponent } from './components/car-comparator/car-comparator.component';
import { from } from 'rxjs';
import { CarComparatorCardsComponent } from './components/car-comparator-cards/car-comparator-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarBrandsComponent,
    CarInputEventComponent,
    HomeComponent,
    CarCardsComponent,
    CarComparatorComponent,
    CarComparatorCardsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
