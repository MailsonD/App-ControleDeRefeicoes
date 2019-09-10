import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})


export class HistoricoPage implements OnInit{

  private turmas: any[];

  private cor: string;

  constructor() { 
    this.turmas = [
      {
        nome:'ADS',
        status:'Aprovado',
        data:'06/06/2006',
        quant:'600'
      },
      {
        nome:'Eng',
        status:'Recusado',
        data:'12/12/2012',
        quant:'111'
      },
      {
        nome:'Auto',
        status:'Recusado',
        data:'15/15/2015',
        quant:'60'
      }
    ]

  }

  ngOnInit() {
    
  }

}
