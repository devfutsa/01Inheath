import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientfilePageRoutingModule } from './patientfile-routing.module';

import { PatientfilePage } from './patientfile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientfilePageRoutingModule
  ],
  declarations: [PatientfilePage]
})
export class PatientfilePageModule {}
