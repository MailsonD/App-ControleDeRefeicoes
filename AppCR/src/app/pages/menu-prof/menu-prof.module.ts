import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuProfPage } from './menu-prof.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProfPage,
    children: [
      {
        path: 'solicitacao',
        loadChildren: () =>
        import('../Professor/solicitacao/solicitacao.module').then(m => m.SolicitacaoPageModule),
                   
      },
      {
        path: 'solicitacao2',
        loadChildren: () =>
        import('../Professor/solicitacao2/solicitacao2.module').then(m => m.Solicitacao2PageModule)  
            
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
  declarations: [MenuProfPage]
})
export class MenuProfPageModule { }
