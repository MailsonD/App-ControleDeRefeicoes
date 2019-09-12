import { ProfessorAuthGuard } from './guards/professor-auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'publico/tabs/tab1/view', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'primeiro-acesso', loadChildren: './pages/primeiro-acesso/primeiro-acesso.module#PrimeiroAcessoPageModule' },
  { path: 'publico', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'menu-prof', loadChildren: './pages/menu-prof/menu-prof.module#MenuProfPageModule', canActivate: [ProfessorAuthGuard] },
  { path: 'estatisticas', loadChildren: './pages/estatistica-gestor/estatistica-gestor.module#EstatisticaGestorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
