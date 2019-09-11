import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-prof',
  templateUrl: './menu-prof.page.html',
  styleUrls: ['./menu-prof.page.scss'],
})
export class MenuProfPage implements OnInit {

  pages = [
    {
      title: 'Historico',
      url: '/menu-prof/historico',
      icon: 'archive'
    },
    {
      title: 'Solicitação',
      url: '/menu-prof/solicitacao',
      icon: 'clipboard'
    },
    {
      title: 'Dados',
      url: '/menu-prof/dados-usuario',
      icon: 'contact'
    },
    {
      title: 'Logout',
      url: '/tabs/tab1/view',
      icon: 'power'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
