import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewAlmocoPage } from './view-almoco.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAlmocoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewAlmocoPage]
})
export class ViewAlmocoPageModule {}
