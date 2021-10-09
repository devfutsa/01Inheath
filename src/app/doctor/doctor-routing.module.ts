import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorPage } from './doctor.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorPage
  },
  {
    path: 'sig-in',
    loadChildren: () => import('./sig-in/sig-in.module').then( m => m.SigInPageModule)
  },
  {
    path: 'sigup-general',
    loadChildren: () => import('./sigup-general/sigup-general.module').then( m => m.SigupGeneralPageModule)
  },
  {
    path: 'sigup-facility',
    loadChildren: () => import('./sigup-facility/sigup-facility.module').then( m => m.SigupFacilityPageModule)
  },
  {
    path: 'sigup-payment',
    loadChildren: () => import('./sigup-payment/sigup-payment.module').then( m => m.SigupPaymentPageModule)
  },
  {
    path: 'tabs',

    children: [
        {
          path: '',
          loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
        },
      ]
  },
  {
    path: 'create-file',
    loadChildren: () => import('./create-file/create-file.module').then( m => m.CreateFilePageModule)
  },
   {
           path: '',
           loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPageRoutingModule {}
