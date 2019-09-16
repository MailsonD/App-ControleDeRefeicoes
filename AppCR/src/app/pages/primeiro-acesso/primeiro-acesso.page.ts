import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.page.html',
  styleUrls: ['./primeiro-acesso.page.scss'],
})
export class PrimeiroAcessoPage implements OnInit {

  firstAcessForm: FormGroup;

  constructor(
    private usuarioService:UsuarioService,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.firstAcessForm = this.formBuilder.group({
      'matricula': [null, [Validators.required, Validators.minLength(4)]],
      'email': [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  firstAcess(){
    this.usuarioService.firstAccess(this.firstAcessForm.value['matricula'],this.firstAcessForm.value['email']).then( () => {
      this.presentToast;
    }).catch(()=>{
      console.log("Erro!")
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Senha Enviada',
      duration: 2000
    });
    toast.present();
  }

}
