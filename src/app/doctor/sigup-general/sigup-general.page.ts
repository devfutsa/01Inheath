import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigup-general',
  templateUrl: './sigup-general.page.html',
  styleUrls: ['./sigup-general.page.scss'],
})
export class SigupGeneralPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

   GeneralD(){
    this.router.navigateByUrl('/doctor/sigup-facility');



   }
}
