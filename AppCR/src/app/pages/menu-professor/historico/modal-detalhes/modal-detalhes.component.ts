import { JustificativaCAEST } from './../../../../models/JustificativaCAEST';
import { ModalController } from '@ionic/angular';
import { Pedido } from '../../../../models/Pedido';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.scss'],
})
export class ModalDetalhesComponent implements OnInit {
  @Input("pedido") pedido:Pedido;
  tipoBeneficio = {"ALMOCO":"Almoço", "JANTA":"Janta", "AMBOS":"Ambos"};
  constructor(private modalController:ModalController) { 
  }

  ngOnInit() {}

  close(){
    this.modalController.dismiss();
  }

}
