import { UsuarioService } from './../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../models/Usuario';
import { SessionService } from './../../services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.page.html',
  styleUrls: ['./dados-usuario.page.scss'],
})
export class DadosUsuarioPage implements OnInit, OnDestroy {

  usuarioForm: FormGroup;
  usuario: Usuario;
  subscription: Subscription;

  constructor(
    private session: SessionService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    
  }

  async ngOnInit() {
    this.subscription = await this.session.$usuario.subscribe(user => {
      this.usuario = user;
      this.usuarioForm = this.formBuilder.group({
        matricula: [this.usuario.matricula, [Validators.required, Validators.minLength(4)]],
        nome: [this.usuario.nome, [Validators.required, Validators.minLength(4)]],
        senha: ['', [Validators.required, Validators.minLength(4)]],
        novaSenha: ['', [Validators.required, Validators.minLength(4)]]
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //updare session

  update(){
    this.usuarioService.passwordChange(this.usuarioForm.value['matricula'],this.usuarioForm.value['senha'],this.usuarioForm.value['novaSenha']).then(res => {
      console.log('Senha atualizada com sucesso');
      this.usuario.senha = this.usuarioForm.value['novaSenha'];
      this.session.nextSession(this.usuario);
    }).catch(err => {
      console.log('Falha ao atualizar senha');
      console.log(err);
    });
  }

}
