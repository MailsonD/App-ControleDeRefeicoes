import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UsuarioService } from './../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../models/Usuario';
import { SessionService } from './../../services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.page.html',
  styleUrls: ['./dados-usuario.page.scss'],
})
export class DadosUsuarioPage implements OnInit, OnDestroy {

  private readonly BASE_64 : string = 'data:image/jpeg;base64,'; 
  usuarioForm: FormGroup;
  usuario: Usuario;
  subscription: Subscription;

  fotoUsuario: string;
  output: string;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
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
      this.recuperarFotoDoBanco();
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
      this.salvar();
    }).catch(err => {
      console.log('Falha ao atualizar senha');
      console.log(err);
    });
  }

  capturar(){
    this.camera.getPicture(this.options).then(imageData => {
      this.fotoUsuario = imageData;
      this.output = this.BASE_64 + imageData;
      alert('Imagem Capturada');
    }).catch(err => {
      alert('Falha ao abrir camera');
      console.log(err);
    });
  }

  salvar(){
    this.storage.get(this.usuario.matricula).then(fotoDoUsuarioBanco => {
      if(this.fotoUsuario !== fotoDoUsuarioBanco){
        this.storage.set(this.usuario.matricula, this.fotoUsuario).then(() => {
          alert("Foto salva");
          this.output = this.BASE_64 + this.fotoUsuario;
        }).catch(err => {
          alert("Falha ao salvar foto");
          console.log(err);
        });
      }
    }).catch(err => {
      alert("Falha ao buscar foto");
      console.log(err);
    });
  }

  recuperarFotoDoBanco(){
    this.storage.get(this.usuario.matricula).then(fotoDoUsuario => {
      this.output = this.BASE_64 + fotoDoUsuario;
    }).catch(err => {
      this.output = '';
      console.log(err);
      alert("Falha ao recuperar imagem");
    });
  }

}
