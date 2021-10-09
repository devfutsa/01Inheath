import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {
    path: 'doctorprofile',
    loadChildren: () => import('../doctorprofile/doctorprofile.module').then( m => m.DoctorprofilePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
