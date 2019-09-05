import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: 'view',
            loadChildren: () =>
              import('../pages/view-publica/view-publica.module').then(m => m.ViewPublicaPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: 'almoco',
            loadChildren: () =>
              import('../pages/view-publica/view-publica.module').then(m => m.ViewPublicaPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: 'janta',
            loadChildren: () =>
              import('../pages/view-publica/view-publica.module').then(m => m.ViewPublicaPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1/view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
