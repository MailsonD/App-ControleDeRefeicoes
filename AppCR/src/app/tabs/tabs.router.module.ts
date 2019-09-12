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
              import('./view-publica/view-publica.module').then(m => m.ViewPublicaPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: 'almoco',
            loadChildren: () =>
              import('./view-almoco/view-almoco.module').then(m => m.ViewAlmocoPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: 'janta',
            loadChildren: () =>
              import('./view-janta/view-janta.module').then(m => m.ViewJantaPageModule)
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
