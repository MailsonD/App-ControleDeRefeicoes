import { SessionService } from './../services/session.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Platform } from '@ionic/angular';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class BackAuthGuard implements CanActivate {

  private readonly URI_LOGIN: string = `${environment.API}/usuario/login`

  constructor(
    private appPreferences: AppPreferences,
    private router: Router,
    private platform: Platform,
    private http: HttpClient,
    private session: SessionService
  ) { };

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let sessao: boolean = false;
    if (!this.platform.is('mobileweb')) {
      //uso mobile
      await this.appPreferences.fetch(environment.SHARED_PREFERENCES_DIRECTORY, environment.SESSAO_ATIVA).then(async autenticado => {
        sessao = autenticado;
        console.log("valor preferences");
        console.log(autenticado);
        await this.appPreferences.fetch(environment.SHARED_PREFERENCES_DIRECTORY, environment.TIPO_ACESSO).then(tipoAcesso => {
          if (tipoAcesso === 'PROFESSOR') {
            this.teacherSession();
          } else if (tipoAcesso === 'GESTOR') {
            this.managerSession();
          }
        })
      }).catch(err => {
        console.log(err); console.log("Erro no Auth")
      });
      return !sessao;
    }
    //uso do navegador
    return true;
  }

  teacherSession() {
    // let usuario: Usuario = this.getDataUser();
    this.getDataUser().then((usuario: Usuario) => {
      this.http.post<Usuario>(this.URI_LOGIN, { 'matricula': usuario.matricula, 'senha': usuario.senha }).toPromise().then(usuario => {
        this.session.nextSession(usuario);
      }).catch(err => {
        console.log("Falha na recriação de sessão do professor");
        this.router.navigate(['/login']);
      });
      this.router.navigate(['/menu-prof/solicitacao']);
      console.log("Professor");
      console.log("SharedPreferences: redirecionando para pagina de professor");
    }).catch(err => console.log);
  }

  async managerSession() {
    // let usuario: Usuario = await this.getDataUser();
    this.getDataUser().then((usuario: Usuario) => {
      this.http.post<Usuario>(this.URI_LOGIN, { 'matricula': usuario.matricula, 'senha': usuario.senha }).toPromise().then(usuario => {
        this.session.nextSession(usuario);
      }).catch(err => {
        console.log("Falha na recriação de sessão do gestor");
        this.router.navigate(['/login']);
      });
      this.router.navigate(['/gestor/estatisticas']);
      console.log("Gestor");
      console.log("SharedPreferences: redirecionando para pagina de gestor");
    }).catch(err => {
      console.log(err);
    });

  }

  async getDataUser(): Promise<Usuario> {
    let meioUsuario: Usuario = new Usuario();
    await this.appPreferences.fetch(environment.SHARED_PREFERENCES_DIRECTORY, environment.MATRICULA_USUARIO).then(matricula => {
      meioUsuario.matricula = matricula;
      console.log("matricula do user:")
      console.log(matricula);
    }).catch(err => console.log);
    await this.appPreferences.fetch(environment.SHARED_PREFERENCES_DIRECTORY, environment.SENHA_USUARIO).then(senha => {
      meioUsuario.senha = senha;
      console.log("senha do user:")
      console.log(senha);
    }).catch(err => console.log());
    return meioUsuario;
  }

}
