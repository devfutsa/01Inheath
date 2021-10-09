import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigupFacilityPage } from './sigup-facility.page';

const routes: Routes = [
  {
    path: '',
    component: SigupFacilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigupFacilityPageRoutingModule {}
