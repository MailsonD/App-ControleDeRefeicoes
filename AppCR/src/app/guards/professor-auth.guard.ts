import { Platform } from '@ionic/angular';
import { environment } from './../../environments/environment';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';
import { SessionService } from '../services/session.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfessorAuthGuard implements CanActivate {

  constructor(
    private session: SessionService,
    private router: Router,
    private appPreferences: AppPreferences,
    private platform: Platform
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
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
