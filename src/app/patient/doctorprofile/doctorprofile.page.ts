import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.page.html',
  styleUrls: ['./doctorprofile.page.scss'],
})
export class DoctorprofilePage implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }


   Appointment(){
    this.router.navigateByUrl('/patient/tabs/tab1/doctorprofile/doctor-appointment');
  }

   RequestBooking(){
    this.router.navigateByUrl('/patient/tabs/tab1/doctorprofile/request-appointment');
  }


}
