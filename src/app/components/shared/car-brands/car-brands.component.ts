import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.css']
})
export class CarBrandsComponent implements OnInit {
  // =====================================================================================
  // Arrays with the currently brand cars to show in the header of application
  brands: string[] = ['BMW', 'Audi', 'Chevrolet', 'Nissan', 'Ford', 'Mazda'];

  constructor() { }

  ngOnInit() {
  }

}
