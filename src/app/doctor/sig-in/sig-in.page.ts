import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.page.html',
  styleUrls: ['./sig-in.page.scss'],
})
export class SigInPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  signinD(){
    this.router.navigateByUrl('/doctor/tabs/tab1');



  }



}
