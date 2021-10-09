import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
    {
    path: 'editprofile',
    loadChildren: () => import('../editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
