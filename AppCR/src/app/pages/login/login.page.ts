import { SessionService } from './../../services/session.service';
import { Usuario } from './../../models/Usuario';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private session: SessionService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'matricula': [null, [Validators.required, Validators.minLength(4)]],
      'senha': [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    this.usuarioService.login(this.loginForm.value['matricula'], this.loginForm.value['senha']).then((usuario: Usuario) => {
      if(usuario.nivelAcesso === 'PROFESSOR'){
        console.log("professor logado");
        this.router.navigate(['menu-prof/solicitacao']);
        this.session.createSession(usuario);
      }else if(usuario.nivelAcesso === 'GESTOR'){
        console.log("gestor logado");
        this.router.navigate(['estatisticas']);
        this.session.createSession(usuario);
      }
    }).catch(err => {
      console.log("error login");
      console.log(err);
    });
  }
}
