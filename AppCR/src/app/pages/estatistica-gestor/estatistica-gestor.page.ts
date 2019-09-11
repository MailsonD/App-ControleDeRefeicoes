import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatistica-gestor',
  templateUrl: './estatistica-gestor.page.html',
  styleUrls: ['./estatistica-gestor.page.scss'],
})
export class EstatisticaGestorPage implements OnInit {

  public valor: number;

  public professor: string;

  constructor() {

    this.valor = 612;
    this.professor = 'Ricardo Job';
   }

  ngOnInit() {
  }

}
