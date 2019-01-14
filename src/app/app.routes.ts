import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComparatorComponent } from './components/car-comparator/car-comparator.component';

const APP_ROUTES: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'comparator', component: CarComparatorComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
