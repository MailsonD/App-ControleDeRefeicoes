import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Observable } from 'rxjs';
import { TipoBeneficio } from 'src/app/models/TipoBeneficio';

@Component({
  selector: 'app-view-publica',
  templateUrl: './view-publica.page.html',
  styleUrls: ['./view-publica.page.scss'],
})
export class ViewPublicaPage implements OnInit {

  public valor: number;
  public items: string[];

  constructor(public pedidoService:PedidoService) { 

    this.items = [
      "Caio Guilherme",
      "Caique Vitoriano",
      "Ian Carneiro",
      "Leanderson Coelho",
      "Luan Bruno",
      "Mailson Dennis",
      "Raul Coelho"
    ]


  }

  ngOnInit() {
    this.pedidoService.total().subscribe( 
      (res:number) =>{
        this.valor = res['quantidade'];
        
    })
    
  }

}
