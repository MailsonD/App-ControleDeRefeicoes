import { environment } from './../../environments/environment';
import { Platform } from '@ionic/angular';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackAuthGuard implements CanActivate {

  constructor(
    private appPreferences: AppPreferences,
    private router: Router,
    private platform: Platform
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
          if(tipoAcesso === 'PROFESSOR'){
            this.router.navigate(['/menu-prof/solicitacao']);
            console.log(tipoAcesso);
            console.log("SharedPreferences: redirecionando para pagina de professor");
          }else if(tipoAcesso === 'GESTOR'){
            this.router.navigate(['/gestor/estatisticas']);
            console.log(tipoAcesso);
            console.log("SharedPreferences: redirecionando para pagina de gestor");
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

}
