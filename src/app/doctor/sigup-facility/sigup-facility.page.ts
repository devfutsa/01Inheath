import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigup-facility',
  templateUrl: './sigup-facility.page.html',
  styleUrls: ['./sigup-facility.page.scss'],
})
export class SigupFacilityPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

    signinF(){
    this.router.navigateByUrl('/doctor/sigup-payment');



  }

}
