import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Relatorio } from '../models/Relatorio';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * @author leanderson.coelhoif@gmail.com
 */

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private readonly API = `${environment.API}/estatistica`;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * @see [take](rxjs/operators) O unsubscribe é feito automaticamente.
   * @description Requisição `GET` para o serviço retornar 
   * as estatística do negócio
   * A requisição é feita somente uma vez, caso seja
   * necessário uma nova requisção deve-se fazer uma
   * nova chamada para o método.
   * @returns `Observable<Relatorio>`
   * 
   * {@example this.service.relatory().subscribe(
                  (data: Relatorio) => {
                    console.log(data.senha);
                  },
                  error => {
                    console.log(error);
                  },
                  () => {
                    console.log('request completed');
                  }
                );
   */
  relatory(): Observable<Relatorio>{
    return this.http.get<Relatorio>(this.API).pipe(take(1));
  }
}
