import { Component, OnInit, Input } from '@angular/core';
import { CarsService } from '../../services/cars.service';


@Component({
  selector: 'app-car-comparator-cards',
  templateUrl: './car-comparator-cards.component.html',
  styleUrls: ['./car-comparator-cards.component.css']
})
export class CarComparatorCardsComponent implements OnInit {

  @Input('clicked')
  
  // gets the updated assigned value of the parent component to show or not comparisons of the cars
  set data(clicked: any) {
    this.showInformation = clicked;
  }

  // Initial variables
  showInformation: boolean;
  brands: String[] = [ 'BMW', 'Audi', 'Chevrolet', 'Nissan', 'Ford', 'Mazda' ];
  models: string[] = [];
  cars: any[];
  newCars: any[] = [];
  selectedCar: any[] = [{
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
  }];

  constructor(private _carsService: CarsService) {}

  ngOnInit() {}

  // search the cars model with the dropdwon selected to get all models and show in the model dropdown
  getCarsModel(selected: any, carBrand: any) {
    carBrand.innerHTML = selected.innerHTML;
    const brand: string = selected.innerHTML.toLowerCase();
    // ======================================================================
    // Consumes the service to get the cars data  in the data file
    this._carsService.getCars().subscribe( (result: any)  => {
      this.cars = result.cars;
      this.models = [];
          this.newCars = [];
      for (const car of this.cars) {
        const name = car.brand.toLowerCase();
        if (name.indexOf(brand) >= 0) {
          this.models.push(car.model);
          this.newCars.push(car);
        }
      }
    }, error => {
      console.group(<any>error);
    });
  }

  searchModel(selected: any, carModel: any) {
    carModel.innerHTML = selected.innerHTML;
    const model: string = selected.innerHTML.toLowerCase();
    this.selectedCar = [];
    for (const car of this.newCars) {
      const carModelText = car.model.toLowerCase();
      if ( carModelText.indexOf(model) >= 0) {
        this.selectedCar.push(car);
      }
    }
  }
}
