import { UsuarioService } from './../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../models/Usuario';
import { SessionService } from './../../services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.page.html',
  styleUrls: ['./dados-usuario.page.scss'],
})
export class DadosUsuarioPage implements OnInit, OnDestroy {

  private readonly BASE_64: string = 'data:image/jpeg;base64,';
  usuarioForm: FormGroup;
  usuario: Usuario;
  subscription: Subscription;
  capturedSnapURL:string;
  output = '';
  

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  }

  constructor(
    private session: SessionService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private camera: Camera,
    private storage: Storage
  ) {
    
  }

  async ngOnInit() {
    this.subscription = await this.session.$usuario.subscribe(user => {
      this.usuario = user;
      this.usuarioForm = this.formBuilder.group({
        matricula: [this.usuario.matricula, [Validators.required, Validators.minLength(4)]],
        nome: [this.usuario.nome, [Validators.required, Validators.minLength(4)]],
        senha: ['', [Validators.required, Validators.minLength(4)]],
        novaSenha: ['', [Validators.required, Validators.minLength(4)]]
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //updare session

  update(){
    this.usuarioService.passwordChange(this.usuarioForm.value['matricula'],this.usuarioForm.value['senha'],this.usuarioForm.value['novaSenha']).then(res => {
      console.log('Senha atualizada com sucesso');
      this.usuario.senha = this.usuarioForm.value['novaSenha'];
      this.session.nextSession(this.usuario);
    }).catch(err => {
      console.log('Falha ao atualizar senha');
      console.log(err);
    });
  }

  salvar() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.storage.set('fotoUsuario', imageData).then(() => {
        alert('Foto salva');
      }).catch(err => {
        alert('Falha na salvagem');
        console.log(err);
      });
    }, (err) => {
      alert('Falha na camera');
      console.log(err);
    });
  }

  exibir(){
    this.storage.get('fotoUsuario').then(data => {
      this.output = this.BASE_64 + data;
      console.log("foto -> "+data);
      alert('Pegou a foto');
    }).catch(err => {
      alert('Falha no get');
      console.log(err);
    });
  }

}
