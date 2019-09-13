import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Turma } from './../../../models/enums/Turma';
import { TipoBeneficio } from '../../../models/enums/TipoBeneficio';
import { Usuario } from './../../../models/Usuario';
import { SessionService } from './../../../services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PedidoService } from '../../../services/pedido.service';
import { Pedido } from '../../../models/Pedido';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.page.html',
  styleUrls: ['./solicitacao.page.scss'],
})
export class SolicitacaoPage implements OnInit, OnDestroy {
  keys = Object.keys;
  tipoBeneficio = TipoBeneficio;
  turma = Turma

  subscription: Subscription;
  usuario: Usuario;
  pedido: Pedido;

  pedidoForm:FormGroup;
  constructor(
    private session: SessionService,
    private pedidoService: PedidoService,
    private formBuilder:FormBuilder,
  ) {
  }


  ngOnInit(): void {
    this.pedidoForm = this.formBuilder.group({
      "turma":[null,[Validators.required]],
      "data":[null,[Validators.required]],
      "tipoBeneficio":[null,[Validators.required]],
      "justificativa":[null,[Validators.required]]
    });
    this.subscription = this.session.$usuario.subscribe(user => {
      this.usuario = user;
    });
  }

  createAndSendFirstPart(){
    this.pedido = new Pedido();
    this.pedido.turma = this.pedidoForm.value["turma"];
    let d:string = this.pedidoForm.value["data"];
    d = d.split("T")[0];
    console.log(d);
    this.pedido.diaSolicitado = d;
    this.pedido.tipoBeneficio = this.pedidoForm.value["tipoBeneficio"];
    this.pedido.justificativa = this.pedidoForm.value["justificativa"];
    this.pedido.matriculaProfessor = this.usuario.matricula;
    this.pedidoService.sendFirstPart(this.pedido);
    console.log("Enviado primeira parte do pedido");
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

