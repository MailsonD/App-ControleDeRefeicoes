import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  

  pages = [
    {
      title: 'Main',
      url: '/menu/estatistica-gestor',
      icon: 'home'
    },
    {
      title: 'Logout',
      url: '/tabs/tab1/view',
      icon: 'power'
    },
    {
      title: 'Dados',
      url: '/menu/dados-usuario',
      icon: 'user'
    }
  ]

  constructor() {
    
   }

  ngOnInit() {
  }

}
