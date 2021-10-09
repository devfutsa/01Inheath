import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientfilePage } from './patientfile.page';

const routes: Routes = [
  {
    path: '',
    component: PatientfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientfilePageRoutingModule {}
