import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Pedido } from '../models/Pedido';
import { Observable, BehaviorSubject } from 'rxjs';
import { Aluno } from '../models/Aluno';
import { TipoBeneficio } from '../models/enums/TipoBeneficio';

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
  private _pedido: BehaviorSubject<Pedido> = new BehaviorSubject<Pedido>({});
  $pedido: Observable<Pedido> = this._pedido.asObservable();

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

  /**
   * @name PedidosDoProfessor
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `GET` para o serviço retornar
   * a lista de pedidos do usuário.
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @param matriculaProfessor Matricula do professor.
   * @param pagina Página do resultado.
   * @returns `Observable<Pedido[]>`
   * 
   * {@example this.service.orderOfTeacher('1', 2).subscribe(
                  (data: Pedido[]) => {
                    console.log(data);
                  },
                  error => {
                    console.log(error);
                  },
                  () => {
                    console.log('request completed');
                  }
                );
   */
  orderOfTeacher(matriculaProfessor: string, pagina: number): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.API}/professor/${matriculaProfessor}?pagina=${pagina}`).pipe(take(1));
  }

  /**
   * @name FiltrarPedidos
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `GET` para o serviço retornar
   * a lista de pedidos filtrada.
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @param matriculaProfessor Matricula do professor.
   * @param pagina Página do resultado.
   * @param data Data dos pedidos.
   * @returns `Observable<Pedido[]>`
   * 
   * {@example this.service.orderFiltered('1', 2, '2019-08-25').subscribe(
                  (data: Pedido[]) => {
                    console.log(data);
                  },
                  error => {
                    console.log(error);
                  },
                  () => {
                    console.log('request completed');
                  }
                );
   */
  orderFiltered(matriculaProfessor: string, pagina: number, data: string, status:string): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.API}/professor/${matriculaProfessor}?pagina=${pagina}&data=${data}&statusPedido=${status}`).pipe(take(1));
  }

  orderFilteredByDate(matriculaProfessor: string, pagina: number, data: string): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.API}/professor/${matriculaProfessor}?pagina=${pagina}&data=${data}`).pipe(take(1));
  }

  orderFilteredByStatus(matriculaProfessor: string, pagina: number, status:string): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.API}/professor/${matriculaProfessor}?pagina=${pagina}&statusPedido=${status}`).pipe(take(1));
  }

  /**
   * @name Total
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `GET` para o serviço retornar
   * a quantidade de refeições concedidas.
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @returns `Observable<number>`
   * 
   * {@example this.service.total().subscribe(
                  (data: number) => {
                    console.log(data);
                  },
                  error => {
                    console.log(error);
                  },
                  () => {
                    console.log('request completed');
                  }
                );
   */
  total(): Observable<number>{
    return this.http.get<number>(`${this.API}/total-refeicoes`).pipe(take(1));
  }

  /**
   * @name RefeiçõesResultado -> MealResult
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `GET` para o serviço retornar
   * a lista de beneficiados do `ALMOÇO` ou `JANTA`
   * do dia.
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @returns `Observable<Aluno[]>`
   * 
   * {@example this.service.total().subscribe(
                  (data: Aluno[]) => {
                    console.log(data);
                  },
                  error => {
                    console.log(error);
                  },
                  () => {
                    console.log('request completed');
                  }
                );
   */
  mealResult(beneficio: string): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.API}/resultado/${beneficio}`).pipe(take(1));
  }

  delete(idPedido:number){
    return this.http.delete(`${this.API}/${idPedido}`).pipe(take(1));
  }

  sendFirstPart(pedido:Pedido){
    this._pedido.next(pedido);
    console.log("Primeira parte da solicitação criada.");
  }

}
