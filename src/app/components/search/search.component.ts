import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cars: any[];
  newCarsArray = [];

  constructor(private _carsService: CarsService, private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe( params => {
      const text = params.brand.toLowerCase();
      this.newCarsArray = [];
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