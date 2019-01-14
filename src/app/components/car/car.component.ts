import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  // Initial variables
  cars: any[];
  car = {
    id: 12,
    brand: '',
    model: '',
    year: '',
    price: '',
    mainImg: '',
    img: [],
    tecnical: {
        color: '',
        doors: '',
        transmission: '',
        traction: '',
        motor: ''
    },
    security: {
        absbrake: '',
        airbag: '',
        alarm: ''
    }
  };

  constructor(private _carsService: CarsService, private actRoute: ActivatedRoute ) {
    // ======================================================================
    // Consumes the service to get the cars data  in the data file
    this._carsService.getCars().subscribe( (result: any)  => {
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
