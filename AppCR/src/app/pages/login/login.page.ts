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
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'matricula': [null, [Validators.required, Validators.minLength(4)]],
      'senha': [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    this.usuarioService.login(this.loginForm.value['matricula'], this.loginForm.value['senha']).toPromise().then((usuario: Usuario) => {
      console.log(usuario);
      if(usuario.nivelAcesso === 'PROFESSOR'){
        this.router.navigate(['estatisticas']);
      }
    }).catch(err => {
      console.log(err);
    });
  }
}
