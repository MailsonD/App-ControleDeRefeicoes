import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'view-publica', loadChildren: './pages/view-publica/view-publica.module#ViewPublicaPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'view-almoco', loadChildren: './pages/view-almoco/view-almoco.module#ViewAlmocoPageModule' },
  { path: 'view-janta', loadChildren: './pages/view-janta/view-janta.module#ViewJantaPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
