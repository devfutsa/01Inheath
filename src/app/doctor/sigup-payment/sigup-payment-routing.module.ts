import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigupPaymentPage } from './sigup-payment.page';

const routes: Routes = [
  {
    path: '',
    component: SigupPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigupPaymentPageRoutingModule {}
