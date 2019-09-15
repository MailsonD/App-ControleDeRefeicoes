import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { PedidoService } from '../../services/pedido.service';
import { Aluno } from '../../models/Aluno';
import { TipoBeneficio } from '../../models/enums/TipoBeneficio';

@Component({
  selector: 'app-view-almoco',
  templateUrl: './view-almoco.page.html',
  styleUrls: ['./view-almoco.page.scss'],
})
export class ViewAlmocoPage implements OnInit {

  public valor: number;
  public alunos: Aluno[];

  public barraDePesquisaAberta = false;

  constructor(private pedidoService:PedidoService) { 
    
  }

  ngOnInit() {
    this.pedidoService.mealResult("almoco").subscribe(
      (res:Aluno[]) =>{
        this.alunos = res;
        this.valor = this.alunos.length;
      }
    )
  }

}

