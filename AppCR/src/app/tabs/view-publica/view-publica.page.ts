import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-publica',
  templateUrl: './view-publica.page.html',
  styleUrls: ['./view-publica.page.scss'],
})
export class ViewPublicaPage implements OnInit {

  public valor: Number;
  public items: string[];

  constructor() { 
    this.valor = 450;
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
  }

}
