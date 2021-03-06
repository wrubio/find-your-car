import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-input-event',
  templateUrl: './car-input-event.component.html',
  styleUrls: ['./car-input-event.component.css']
})
export class CarInputEventComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  // ======================================================================
  // Click event methods  to redirect to the comparator and home component
  showComparator() {
    this.router.navigate(['/comparator']);
  }

  findBrand( term: string) {
    this.router.navigate(['/search', term]);
  }
}
