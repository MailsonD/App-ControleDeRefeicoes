import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'estatistica-gestor',
        loadChildren: () =>
          import('../estatistica-gestor/estatistica-gestor.module').then(m => m.EstatisticaGestorPageModule)
      },
      {
        path: 'dados-usuario',        
        loadChildren: () =>
          import('../dados-usuario/dados-usuario.module').then(n => n.DadosUsuarioPageModule)
      },
      {
        path: 'historico',        
        loadChildren: () =>
          import('../Professor/historico/historico.module').then(n => n.HistoricoPageModule)
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
