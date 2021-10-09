import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

   SignUpP(){
    this.router.navigateByUrl('patient/tabs/tab1');
  }

}
