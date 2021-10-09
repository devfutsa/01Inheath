import { Component, OnInit } from '@angular/core';
import { Routes , Router } from '@angular/router';

@Component({
  selector: 'app-sigup-payment',
  templateUrl: './sigup-payment.page.html',
  styleUrls: ['./sigup-payment.page.scss'],
})
export class SigupPaymentPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }


    signinP(){
      this.router.navigateByUrl('/doctor/tabs/tab1');



    }





}
