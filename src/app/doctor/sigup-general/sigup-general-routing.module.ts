import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigupGeneralPage } from './sigup-general.page';

const routes: Routes = [
  {
    path: '',
    component: SigupGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigupGeneralPageRoutingModule {}
