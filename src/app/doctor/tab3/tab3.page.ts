import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor( private router:Router ) { }

  viewPatients(){
    this.router.navigateByUrl('/doctor/tabs/tab3/patient-profile');
  }

  ngOnInit() {
  }

}
