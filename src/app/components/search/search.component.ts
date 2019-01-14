import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // cars variable
  cars: any[];
  // car variable found
  newCarsArray = [];

  constructor(private _carsService: CarsService, private actRoute: ActivatedRoute) {
    // =====================================================================================
    // get the parameters of the route to get the searched car information
    this.actRoute.params.subscribe( params => {
      const text = params.brand.toLowerCase();
      this.newCarsArray = [];
      // =====================================================================================
      // consumes the service to bring the cars and look for the one selected by the user
      this._carsService.getCars().subscribe( (result: any)  => {
        this.cars = result.cars;
        for (const car of this.cars) {
          const name = car.brand.toLowerCase();
          if (name.indexOf(text) >= 0) {
            this.newCarsArray.push(car);
          }
        }
      }, error => {
        console.group(<any>error);
      });
    });
  }

  ngOnInit() {}

}
