import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorprofilePage } from './doctorprofile.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorprofilePage
  },

   {
    path: 'doctor-appointment',
    loadChildren: () => import('../doctor-appointment/doctor-appointment.module').then( m => m.DoctorAppointmentPageModule)
  },
  {
    path: 'request-appointment',
    loadChildren: () => import('../request-appointment/request-appointment.module').then( m => m.RequestAppointmentPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorprofilePageRoutingModule {}
