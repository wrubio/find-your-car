import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-comparator',
  templateUrl: './car-comparator.component.html',
  styleUrls: ['./car-comparator.component.css']
})
export class CarComparatorComponent implements OnInit {
  // Initial variables
  compare: boolean;
  alert: boolean;
  constructor(private router: Router) {
    this.compare = false;
    this.alert = false;
  }

  ngOnInit() {
  }

  // =================================================================================================
  // method that updates the selected value of the dropdown to obtain the data of the car to consult
  showSelected() {
    const modelSelectors = Array.prototype.slice.apply(document.querySelectorAll('.dropdown-model'));
    let modelCount = 0;
    console.log(modelSelectors);
    for (let model of modelSelectors) {
      if (model.innerHTML === 'Modelo') {
        modelCount++;
      }
    }
    console.log(modelCount);
    if (modelCount > 1) {
      this.alert = true;
    } else {
      this.compare = true;
      this.alert = false;
    }
  }

  // ================================================================
  // Reset or reload the comparator component
  reloadComponent() {
    this.router.navigateByUrl('home', {skipLocationChange: true}).then( () => this.router.navigate(['comparator']));
  }
}
