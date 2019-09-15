import { Component, OnInit } from '@angular/core';
import { Relatorio } from 'src/app/models/Relatorio';
import { RelatorioService } from 'src/app/services/relatorio.service';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-estatistica-gestor',
  templateUrl: './estatistica-gestor.page.html',
  styleUrls: ['./estatistica-gestor.page.scss'],
})
export class EstatisticaGestorPage implements OnInit {

  public valor: number;

  public professorQueMaisSolicitouAlmocos: string;
  public professorQueMaisSolicitouJantares: string;
  public diaDaSemanaComMaisSolicitacoes: string;
  public diaDaSemanaComMenosSolicitacoes: string;
  public jantaresDeferidos: string;
  public jantaresIndeferidos: string;
  public almocosDeferidos: string;
  public almocosIndeferidos: string;



  constructor(private relatorioService:RelatorioService, private pedidoService:PedidoService) {

   }

  ngOnInit() {

    this.pedidoService.total().subscribe(
      (tot:number) =>{
        this.valor = tot['quantidade'];
      }
    )

    this.relatorioService.relatory().subscribe(
      (res:Relatorio) =>{
        console.log(res)
        this.professorQueMaisSolicitouAlmocos  = res['professorQueMaisSolicitouAlmocos'];
        this.professorQueMaisSolicitouJantares = res['professorQueMaisSolicitouJantares'];
        this.almocosDeferidos = res['almocosDeferidos'];
        this.almocosIndeferidos = res['almocosIndeferidos'];
        this.jantaresDeferidos = res['jantaresDeferidos'];
        this.jantaresIndeferidos = res['jantaresIndeferidos'];
        this.diaDaSemanaComMaisSolicitacoes = res['diaDaSemanaComMaisSolicitacoes'];
        this.diaDaSemanaComMenosSolicitacoes = res['diaDaSemanaComMenosSolicitacoes'];
      }
    )
  }

}
