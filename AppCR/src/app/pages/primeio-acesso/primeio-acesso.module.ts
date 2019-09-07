import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimeioAcessoPage } from './primeio-acesso.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeioAcessoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimeioAcessoPage]
})
export class PrimeioAcessoPageModule {}
