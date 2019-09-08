import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Pedido } from '../models/Pedido';
import { Observable } from 'rxjs';

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
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `GET` para o serviço buscar
   * os pedidos.
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @returns `Observable<Pedido[]>`
   * 
   * {@example this.service.list().subscribe(
        (dados: Pedido[]) => {
          console.log(dados);
        });
   */
  list(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.API).pipe(take(1));
  }

  /**
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `POST` para o serviço cadastrar
   * um novo `Pedido`. 
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @param pedido Novo Pedido que será salvo.
   * @returns `Observable<Object>`
   * 
   * {@example this.service.create(pedido).subscribe(
        sucesso => console.log("OK"),
        error => console.log(error),
        () => console.log("request terminated")
        );
      }
   */
  create(pedido: Pedido): Observable<Object> {
    return this.http.post(this.API, pedido).pipe(take(1));
  }
}
