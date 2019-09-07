import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstatisticaGestorPage } from './estatistica-gestor.page';

const routes: Routes = [
  {
    path: '',
    component: EstatisticaGestorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstatisticaGestorPage]
})
export class EstatisticaGestorPageModule {}
