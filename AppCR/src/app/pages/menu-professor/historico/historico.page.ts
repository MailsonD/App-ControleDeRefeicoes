import { SessionService } from './../../../services/session.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../../models/Usuario';
import { Subscription, Observable } from 'rxjs';
import { UsuarioService } from './../../../services/usuario.service';
import { ModalDetalhesComponent } from './modal-detalhes/modal-detalhes.component';
import { PedidoService } from './../../../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/Pedido';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})


export class HistoricoPage implements OnInit {
  pagina: number = 1;
  status = ["ACEITO", "PENDENTE", "RECUSADO"];
  pedidos: Pedido[];
  subscription: Subscription;
  usuario: Usuario;
  buscaForm: FormGroup;
  customOptions = {}
  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService,
    private sessionService: SessionService,
    private modalController: ModalController,
    public alertController: AlertController
  ) {
    this.subscription = this.sessionService.$usuario.subscribe(dados => this.usuario = dados);
    // this.usuario = new Usuario();
    // this.usuario.matricula="1234";
  }

  ngOnInit() {
    this.buscaForm = this.formBuilder.group({
      "status": [null],
      "data": [null]
    });
    this.pedidoService.orderOfTeacher(this.usuario.matricula, this.pagina).subscribe(dados => this.pedidos = dados);
  }

  async details(index: number) {

    const modal = await this.modalController.create({
      component: ModalDetalhesComponent,
      componentProps: {
        'pedido': this.pedidos[index],
      }
    });
    return await modal.present();
  }

  buscar() {
    let s = this.buscaForm.value["status"];
    let d: string = this.buscaForm.value["data"];
    d = (d == null) ? d : d.split("T")[0];
    let sub: Observable<Pedido[]>;
    if (s == null && d == null) {
      sub = this.pedidoService.orderOfTeacher(this.usuario.matricula, this.pagina);
    } else if (s != null && d != null) {
      sub = this.pedidoService.orderFiltered(this.usuario.matricula, this.pagina, d, s);
    } else if (s == null && d != null) {
      sub = this.pedidoService.orderFilteredByDate(this.usuario.matricula, this.pagina, d);
    } else if (s != null && d == null) {
      sub = this.pedidoService.orderFilteredByStatus(this.usuario.matricula, this.pagina, s);
    }
    sub.subscribe(dados => this.pedidos = dados);
  }

  delete(i:number){
    // console.log(this.pedidos[i].id);
    this.pedidoService.delete(this.pedidos[i].id).subscribe(res => console.log(res));
    this.pedidos.splice(i, 1)
  }

  reset(){
    this.buscaForm.controls['data'].setValue(null);
    this.buscaForm.controls['status'].setValue(null);
  }

  previous(){
    if(this.pagina!=1){
      this.pagina--;
      this.buscar();
    }
  }
  next(){
    if(this.pedidos.length>=10){
      this.pagina++;
      this.buscar();
    }
  }

  async presentAlertConfirm(i: number) {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Message você realmente deseja <strong>remover</strong> a solicitação?!',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.delete(i);
          }
        }
      ]
    });

    await alert.present();
  }

}
