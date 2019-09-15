import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Usuario } from '../models/Usuario';
import { Observable, BehaviorSubject } from 'rxjs';

/**
 * @author leanderson.coelhoif@gmail.com
 */

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}/usuario`;
  private _usuario: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({});
  $usuario: Observable<Usuario> = this._usuario.asObservable(); 

  constructor(
    private http: HttpClient
  ) { }


  /**
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `POST` para o serviço efetuar
   * o login do `Usuario`.
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @param matricula Matricula do usuário.
   * @param senha Senha do usuário.
   * @returns `Observable<Usuario>`
   * 
   * {@example this.service.login('','').then((user: Usuario) => {
                  console.log(user);
                }).catch(err => console.log)
                .finally(() => {
                  console.log('ok');
                })
   */
  login(matricula: string, senha: string): Promise<Usuario>{
    return this.http.post<Usuario>(`${this.API}/login`, {'matricula':matricula, 'senha':senha}).toPromise();
  }

  /**
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `POST` para o serviço gerar
   * a senha do usuário.
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @param matricula Matricula do usuário.
   * @param email Email do usuário.
   * @returns `Observable<any>`
   * 
   * {@example this.service.firstAccess("123", "123_gmail.com").subscribe(
                  success => {
                    console.log('success');
                  },
                  error => {
                    console.log(error);
                  },
                  () => {
                    console.log('request completed');
                  }
                );
   */
  firstAccess(matricula: string, email: string): Observable<any>{
    return this.http.post(`${this.API}/primeiroAcesso`, { 'matricula':matricula, 'email':email }).pipe(take(1));
  }

  /**
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `PUT` para o serviço atualizar 
   * a senha do usuário.
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @param usuario Usuário que terá a senha atualizada.
   * @param senha Nova senha do usuário.
   * @returns `Observable<Usuario>`
   * 
   * {@example this.service.passwordChange(usuario, "senhaForte").subscribe(
                  (data: Usuario) => {
                    console.log(data.senha);
                    this.usuario = data;
                  },
                  error => {
                    console.log(error);
                  },
                  () => {
                    console.log('request completed');
                  }
                );
   */
  passwordChange(matricula: string, senha: string, novaSenha: string): Promise<Usuario>{
    return this.http.put<Usuario>(`${this.API}/alterar-senha`, { 'matricula':matricula, 'senhaAntiga': senha, 'senhaNova': novaSenha }).toPromise();
  }

}
