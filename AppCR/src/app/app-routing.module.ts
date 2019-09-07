import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'view-publica', loadChildren: './pages/view-publica/view-publica.module#ViewPublicaPageModule'},

  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'view-almoco', loadChildren: './pages/view-almoco/view-almoco.module#ViewAlmocoPageModule' },
  { path: 'view-janta', loadChildren: './pages/view-janta/view-janta.module#ViewJantaPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'primeiro-acesso', loadChildren: './pages/primeiro-acesso/primeiro-acesso.module#PrimeiroAcessoPageModule' },
  { path: 'dados-usuario', loadChildren: './pages/dados-usuario/dados-usuario.module#DadosUsuarioPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
