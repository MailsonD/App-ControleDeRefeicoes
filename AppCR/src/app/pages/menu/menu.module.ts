import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { EstatisticaGestorPage } from '../Gestor/estatistica-gestor/estatistica-gestor.page';


const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'estatistica-gestor',
        loadChildren: () =>
              import('../Gestor/estatistica-gestor/estatistica-gestor.module').then(m => m.EstatisticaGestorPageModule)
          }
    ]
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
