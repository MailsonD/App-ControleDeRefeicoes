import { environment } from './../../environments/environment';
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

  private _usuario: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({});
  $usuario: Observable<Usuario> = this._usuario.asObservable();

  constructor(
    private appPreferences: AppPreferences
  ) { }

  /**
   * @description Cria uma nova sessão
   * @param usuario Novo usuário de sessão
   */
  createSession(usuario: Usuario): void {
    this._usuario.next(usuario);
    this.appPreferences.store(environment.SHARED_PREFERENCES_DIRECTORY, environment.SESSAO_ATIVA, true)
      .then(() => console.log("SharedPreferences: Sessao iniciada."))
      .catch(err => console.log("SharedPreferences: Falha: ", err));
    this.appPreferences.store(environment.SHARED_PREFERENCES_DIRECTORY, environment.TIPO_ACESSO, usuario.nivelAcesso)
      .then(() => console.log("SharedPreferences: Tipo de acesso iniciada."))
      .catch(err => console.log("SharedPreferences: Falha: ", err));
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
   * @description Atualiza a sessão
   * @param usuario Novo usuário de sessão
   */
  nextSession(usuario: Usuario){
    this._usuario.next(usuario);
  }
}
