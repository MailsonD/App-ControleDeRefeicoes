import { BackAuthGuard } from './guards/back-auth.guard';
import { ProfessorAuthGuard } from './guards/professor-auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'publico/tabs/tab1/view', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [BackAuthGuard] },
  { path: 'primeiro-acesso', loadChildren: './pages/primeiro-acesso/primeiro-acesso.module#PrimeiroAcessoPageModule', canActivate: [BackAuthGuard] },
  { path: 'publico', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [BackAuthGuard] },
  { path: 'menu-prof', loadChildren: './pages/menu-prof/menu-prof.module#MenuProfPageModule', canActivate: [ProfessorAuthGuard] },
  { path: 'estatisticas', loadChildren: './pages/estatistica-gestor/estatistica-gestor.module#EstatisticaGestorPageModule' },
  { path: 'solicitacao', loadChildren: './pages/Professor/solicitacao/solicitacao.module#SolicitacaoPageModule' },
  // { path: '', loadChildren: './pages/Professor/solicitacao/solicitacao.module#SolicitacaoPageModule', pathMatch: 'full' },
  { path: 'solicitacao2', loadChildren: './pages/Professor/solicitacao2/solicitacao2.module#Solicitacao2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
