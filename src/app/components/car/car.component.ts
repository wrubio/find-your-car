import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: any[];
  car: {};

  constructor(private _carsService: CarsService, private actRoute: ActivatedRoute ) {
    this._carsService.getCars().subscribe( result => {
      this.cars = result.cars;
      this.actRoute.params.subscribe( params => {
        this.car = this.cars.find(x => x.id === parseInt(params.id, 10));
        console.log(this.car);
      });

    }, error => {
      console.group(<any>error);
    });
  }

  ngOnInit() {}

}
