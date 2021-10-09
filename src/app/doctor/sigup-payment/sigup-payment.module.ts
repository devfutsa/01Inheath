import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigupPaymentPageRoutingModule } from './sigup-payment-routing.module';

import { SigupPaymentPage } from './sigup-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigupPaymentPageRoutingModule
  ],
  declarations: [SigupPaymentPage]
})
export class SigupPaymentPageModule {}
