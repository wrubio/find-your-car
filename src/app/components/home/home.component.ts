import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: any[];

  constructor(private _carsService: CarsService) { }

  ngOnInit() {
    this._carsService.getCars().subscribe( result => {
      this.cars = result.cars;
    }, error => {
      console.group(<any>error);
    });
  }

}
