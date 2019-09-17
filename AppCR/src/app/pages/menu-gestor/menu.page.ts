import { SessionService } from '../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {



  pages = [
    {
      title: 'Estatisticas',
      url: '/gestor/estatisticas',
      icon: 'stats'
    },
    {
      title: 'Dados',
      url: '/gestor/dados-usuario',
      icon: 'contact'
    },
    {
      title: 'Logout',
      url: '/publico/tabs/tab1/view',
      icon: 'power'
    }
  ]

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }

  logout(title: string) {
    if (title === 'Logout') {
      let subscription = this.session.$usuario.subscribe((user : Usuario) =>{
      this.session.invalidManagerToken(user.matricula);
      this.session.invalidateSession();
      });
      subscription.unsubscribe();
    }
  }

}
