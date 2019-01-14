import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // ===================================================================
    // Allow to close de toggle navbar on a click event
    const navMain = $('.navbar-collapse');
    navMain.on('click', 'a:not([data-toggle])', null, function () {
      navMain.collapse('hide');
    });
  }
}
