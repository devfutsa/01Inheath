import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: [


        {
          path: '',
          redirectTo: 'patient/tabs/tab2',
          pathMatch: 'full'
        }
    ]
  },
    {
          path: '',
          redirectTo: 'patient/tabs/tab2',
          pathMatch: 'full'
        },


      {
        path: 'appointment',
        loadChildren: () => import('../appointment/appointment.module').then( m => m.AppointmentPageModule)
      },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
