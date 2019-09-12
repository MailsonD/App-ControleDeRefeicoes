import { Usuario } from './../../../models/Usuario';
import { SessionService } from './../../../services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.page.html',
  styleUrls: ['./solicitacao.page.scss'],
})
export class SolicitacaoPage implements OnInit, OnDestroy {

  subscription: Subscription;
  usuario: Usuario;

  constructor(
    private session: SessionService
  ) {
  }


  ngOnInit(): void {
    this.subscription = this.session.$usuario.subscribe(user => {
      this.usuario = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
