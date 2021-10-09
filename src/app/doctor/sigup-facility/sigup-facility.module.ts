import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigupFacilityPageRoutingModule } from './sigup-facility-routing.module';

import { SigupFacilityPage } from './sigup-facility.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigupFacilityPageRoutingModule
  ],
  declarations: [SigupFacilityPage]
})
export class SigupFacilityPageModule {}
