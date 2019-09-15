import { Aluno } from './../../../models/Aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable, observable } from 'rxjs';
import { Pedido } from './../../../models/Pedido';
import { PedidoService } from './../../../services/pedido.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacao2',
  templateUrl: './solicitacao2.page.html',
  styleUrls: ['./solicitacao2.page.scss'],
})
export class Solicitacao2Page implements OnInit, OnDestroy {
  subscription: Subscription;
  pedido: Pedido;
  aluno: Aluno;
  alunos: Aluno[] = [];

  alunoForm: FormGroup
  constructor(
    private pedidoService: PedidoService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.alunoForm = this.formBuilder.group({
      "nome": [null, [Validators.required]],
      "matricula": [null, [Validators.required]]
    });

    this.subscription = this.pedidoService.$pedido.subscribe(p => {
      this.pedido = p;
      console.log(this.pedido);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addAluno() {
    this.aluno = new Aluno();
    this.aluno.nome = this.alunoForm.value["nome"];
    this.aluno.matricula = this.alunoForm.value["matricula"];
    
    if(this.alunos.find(a=>{return a.matricula == this.aluno.matricula}) == undefined){
      this.alunos.push(this.aluno);
      this.alunoForm.setValue({ "nome": null, "matricula": null });
      console.log("Aluno adicionado.");
    }else{
      this.presentToast("Aluno com esta matricula já existe");
    }
  }

  deleteAlunoFromArray(i: number) {
    this.alunos.splice(i, 1);
  }

  editAlunoFromArray(i: number) {
    this.aluno = this.alunos[i];
    this.alunoForm.setValue({ "nome": this.aluno.nome, "matricula": this.aluno.matricula });
    this.deleteAlunoFromArray(i);
  }

  send() {
    this.pedido.alunos = this.alunos;
    this.pedidoService.create(this.pedido).subscribe(res=>console.log);
    this.presentToast("Pedido cadastrado com sucesso!");
    this.router.navigate(['/menu-prof/solicitacao']);
  }
  async presentToast(mensagem:string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }
}