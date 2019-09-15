import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { TipoBeneficio } from 'src/app/models/TipoBeneficio';
import { Aluno } from '../../models/Aluno';

@Component({
  selector: 'app-view-janta',
  templateUrl: './view-janta.page.html',
  styleUrls: ['./view-janta.page.scss'],
})
export class ViewJantaPage implements OnInit {

  public valor: number;
  public alunos: Aluno[];

  public barraDePesquisaAberta = false;

  constructor(private pedidoService: PedidoService) {

  }

  ngOnInit() {
    this.pedidoService.mealResult(TipoBeneficio.JANTA).subscribe(
      (res: Aluno[]) => {
        this.alunos = res;
        this.valor = this.alunos.length;
      }
    )
  }

}