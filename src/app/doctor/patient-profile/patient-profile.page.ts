import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.page.html',
  styleUrls: ['./patient-profile.page.scss'],
})
export class PatientProfilePage implements OnInit {

  constructor( private router: Router) { }


   Createfile(){
    this.router.navigateByUrl('/doctor/tabs/tab3/patient-profile/create-file');
  }


  ngOnInit() {
  }

}
