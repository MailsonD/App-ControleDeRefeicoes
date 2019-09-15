import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.page.html',
  styleUrls: ['./dados-usuario.page.scss'],
})
export class DadosUsuarioPage implements OnInit {

  private readonly base = 'data:image/jpeg;base64,';
  output: string;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  }

  constructor(
    private camera: Camera,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.output = '';
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
      this.output = this.base + data;
      console.log("foto -> "+data);
      alert('Pegou a foto');
    }).catch(err => {
      alert('Falha no get');
      console.log(err);
    });
  }

}
