import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigupGeneralPageRoutingModule } from './sigup-general-routing.module';

import { SigupGeneralPage } from './sigup-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigupGeneralPageRoutingModule
  ],
  declarations: [SigupGeneralPage]
})
export class SigupGeneralPageModule {}
