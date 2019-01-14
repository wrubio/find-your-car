import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-comparator',
  templateUrl: './car-comparator.component.html',
  styleUrls: ['./car-comparator.component.css']
})
export class CarComparatorComponent implements OnInit {

  compare: boolean;
  constructor(private router: Router) {
    this.compare = false;
  }

  ngOnInit() {
  }

  showSelected() {
    this.compare = true;
  }

  reloadComponent() {
    this.router.navigateByUrl('home', {skipLocationChange: true}).then( () => this.router.navigate(['comparator']));
  }
}
