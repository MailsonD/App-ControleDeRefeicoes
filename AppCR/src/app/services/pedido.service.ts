import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

/**
 * @author leanderson.coelhoif@gmail.com
 * @description Serviço para Pedido
 * @
 */
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly API = `${environment.API}/pedido`;
  
  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   */
  list(){
    return this.http.get(this.API).pipe(take(1));
  }

  // create() -> vou precisar do objeto!
}
