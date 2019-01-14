import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComparatorComponent } from './components/car-comparator/car-comparator.component';
import { CarComponent } from './components/car/car.component';
import { SearchComponent } from './components/search/search.component';

// =========================================================
// Front-end application routes system
const APP_ROUTES: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'comparator', component: CarComparatorComponent },
 { path: 'car/:id', component: CarComponent },
 { path: 'search/:brand', component: SearchComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
