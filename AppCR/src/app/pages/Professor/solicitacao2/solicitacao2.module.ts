import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Solicitacao2Page } from './solicitacao2.page';

const routes: Routes = [
  {
    path: '',
    component: Solicitacao2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Solicitacao2Page]
})
export class Solicitacao2PageModule {}
