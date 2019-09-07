import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-almoco',
  templateUrl: './view-almoco.page.html',
  styleUrls: ['./view-almoco.page.scss'],
})
export class ViewAlmocoPage implements OnInit {

  public valor: number;
  public items: string[];

  public barraDePesquisaAberta = false;

  constructor() { 
    this.valor = 612;
    this.items = [
      "Menino 1 - 201522121456",
      "Menino 2 - 201522184564",
      "Menino 3 - 201241414141",
      "Menino 4 - 201241241241",
      "Menino 5 - 202214241241",
      "Menino 6 - 201341411212",
      "Menino 7 - 203414141334",
      "Menino 8 - 201123123231"
    ]
  }

  ngOnInit() {
  }

}
