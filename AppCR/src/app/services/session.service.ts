import { Firebase } from '@ionic-native/firebase/ngx';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './../models/Usuario';
import { Injectable } from '@angular/core';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';

/**
 * @author leanderson.coelhoif@gmail.com
 */

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly API: string = environment.API;
  private _usuario: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({});
  $usuario: Observable<Usuario> = this._usuario.asObservable();

  constructor(
    private appPreferences: AppPreferences,
    private http: HttpClient,
    private firebase: Firebase
  ) { }

  /**
   * @description Cria uma nova sessão de um professor.
   * @param usuario Novo usuário de sessão.
   */
  createTeacherSession(usuario: Usuario): void {
    this._usuario.next(usuario);
    this.appPreferences.store(environment.SHARED_PREFERENCES_DIRECTORY, environment.SESSAO_ATIVA, true)
      .then(() => console.log("SharedPreferences: Sessao iniciada."))
      .catch(err => console.log("SharedPreferences: Falha: ", err));
    this.appPreferences.store(environment.SHARED_PREFERENCES_DIRECTORY, environment.TIPO_ACESSO, usuario.nivelAcesso)
      .then(() => console.log("SharedPreferences: Tipo de acesso iniciada."))
      .catch(err => console.log("SharedPreferences: Falha: ", err));
    //persistir dados comuns de usuário
    this.persistDataUser(usuario);
  }

  /**
   * @description Cria uma nova sessão de um gestor.
   * @param usuario Novo usuário de sessão.
   * @param token token do firebase do gestor.
   */
  createManagerSession(usuario: Usuario): void {
    this._usuario.next(usuario);
    this.appPreferences.store(environment.SHARED_PREFERENCES_DIRECTORY, environment.SESSAO_ATIVA, true)
      .then(() => console.log("SharedPreferences: Sessao iniciada."))
      .catch(err => { console.log("SharedPreferences: Falha: "); console.log(err) });
    this.appPreferences.store(environment.SHARED_PREFERENCES_DIRECTORY, environment.TIPO_ACESSO, usuario.nivelAcesso)
      .then(() => console.log("SharedPreferences: Tipo de acesso iniciada."))
      .catch(err => { console.log("SharedPreferences: Falha: "); console.log(err) });
    //persistir dados comuns de usuário
    this.persistDataUser(usuario);
    this.firebase.getToken()
      .then(token => {
        console.log(token);
        this.http.post(`${this.API}/usuario/token`, { 'matricula': usuario.matricula, 'token': token }).toPromise().then(() => {
          console.log("Token enviado");
        }).catch(err => {
          console.log("Falha no envio de token");
          console.log(err);
        });
      }).catch(error => console.error('Error getting token', error));
  }

  private persistDataUser(usuario: Usuario) {
    this.appPreferences.store(environment.SHARED_PREFERENCES_DIRECTORY, environment.MATRICULA_USUARIO, usuario.matricula)
      .then(() => console.log("Matricula do usuário persistida"))
      .catch(err => { console.log("SharedPreferences: Falha: "); console.log(err) });
    this.appPreferences.store(environment.SHARED_PREFERENCES_DIRECTORY, environment.SENHA_USUARIO, usuario.senha)
      .then(() => console.log("Senha do usuário persistida"))
      .catch(err => { console.log("SharedPreferences: Falha: "); console.log(err) });
  }

  /**
   * @description Finaliza uma sessão
   */
  invalidateSession(): void {
    this._usuario.next(null);
    this.appPreferences.remove(environment.SHARED_PREFERENCES_DIRECTORY, environment.SESSAO_ATIVA)
      .then(() => console.log("SharedPreferences: Sessao finalizada."))
      .catch(err => console.log("SharedPreferences: Falha: ", err));
    this.appPreferences.remove(environment.SHARED_PREFERENCES_DIRECTORY, environment.TIPO_ACESSO)
      .then(() => console.log("SharedPreferences: Tipo de acesso iniciada."))
      .catch(err => console.log("SharedPreferences: Falha: ", err));
  }

  /**
   * Revome o token do gestor do servidor
   * @param matricula Matricula do gestor
   */
  invalidManagerToken(matricula: string) {
    this.http.delete(`${this.API}/usuario/token/${matricula}`).toPromise().then(() => {
      console.log("token removido do servidor");
    }).catch(err => {
      console.log("falha ao remover token do servidor");
      console.log(err);
    });
  }

  /**
   * @description Atualiza a sessão
   * @param usuario Novo usuário de sessão
   */
  nextSession(usuario: Usuario) {
    this._usuario.next(usuario);
  }
}
