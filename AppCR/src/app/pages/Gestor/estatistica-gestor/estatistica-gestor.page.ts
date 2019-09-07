import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatistica-gestor',
  templateUrl: './estatistica-gestor.page.html',
  styleUrls: ['./estatistica-gestor.page.scss'],
})
export class EstatisticaGestorPage implements OnInit {

  public valor: number;

  public professor: string;
  public dia: string;


  constructor() {

    this.valor = 612;
    this.professor = 'Ricardo Job';
    this.dia = 'Quarta';

   }

  ngOnInit() {
  }

}
