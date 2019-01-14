import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.css']
})
export class CarCardsComponent implements OnInit {

  @Input() car: any = {};

  constructor( private router: Router ) { }

  ngOnInit() {}

  showCarInformation(id: number) {
    this.router.navigate(['/car', id]);
  }

}
