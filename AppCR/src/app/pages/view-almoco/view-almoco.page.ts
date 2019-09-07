import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-view-almoco',
  templateUrl: './view-almoco.page.html',
  styleUrls: ['./view-almoco.page.scss'],
})
export class ViewAlmocoPage implements OnInit {

  @ViewChild("refeicao")refeicao:IonTabs

  constructor() { 
    
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.refeicao.select(1)
    },100)
  }

  ngOnInit() {
  }

}
