import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  

  pages = [
    {
      title: 'Estatisticas',
      url: '/menu/estatistica-gestor',
      icon: 'stats'
    },
    {
      title: 'Dados',
      url: '/menu/dados-usuario',
      icon: 'contact'
    },
    {
      title: 'Logout',
      url: '/tabs/tab1/view',
      icon: 'power'
    }
  ]

  constructor() {
    
   }

  ngOnInit() {
  }

}
