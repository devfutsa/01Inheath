import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientPage } from './patient.page';

const routes: Routes = [
  {
    path: '',
    component: PatientPage
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
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
           path: '',
           loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPageRoutingModule {}
