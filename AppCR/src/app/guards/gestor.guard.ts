import { environment } from './../../environments/environment';
import { Platform } from '@ionic/angular';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
import { SessionService } from './../services/session.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorGuard implements CanActivate {
  constructor(
    private session: SessionService,
    private router: Router,
    private appPreferences: AppPreferences,
    private platform: Platform
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("Gestor Guard");
    let sessao: boolean = false;
    if (!this.platform.is('mobileweb')) {
      await this.appPreferences.fetch(environment.SHARED_PREFERENCES_DIRECTORY, environment.SESSAO_ATIVA).then(autenticado => {
        sessao = autenticado;
        console.log("valor preferences");
        console.log(autenticado);
      }).catch(err => {
        console.log(err); console.log("Erro no Auth")
      });
      //usado no mobile
      if(sessao){
        return sessao;
      }else{
        this.router.navigate(['']);
        return sessao;
      }
    }
    //usado no navegador
    return true;
  }
}
