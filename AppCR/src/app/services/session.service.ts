import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './../models/Usuario';
import { Injectable } from '@angular/core';

/**
 * @author leanderson.coelhoif@gmail.com
 */

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _usuario: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>({});
  $usuario: Observable<Usuario> = this._usuario.asObservable(); 

  constructor() { }

  createSession(usuario: Usuario): void{
    this._usuario.next(usuario);
  }

  invalidateSession(): void{
    this._usuario.next(null);
  }
}
