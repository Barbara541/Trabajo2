import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  profile: any = null;
  usuario:any=null;
  pageTitle = 'home';
  image = 'rocket.svg';
  pageIcon = `../../../assets/img/${this.image}`;
  

  constructor(
    private profileService: ProfileService,
    private alertCtrl : AlertController,
    private loadingCtrl: LoadingController,
    private AuthService: AuthService,
  ) { 
    this.loadProfile();
  }

  ngOnInit() {
  }

  loadProfile(){
    this.profileService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
      console.log(respuesta);
    });
  }
  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    if(avatar){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const result = await this.profileService.changePhoto(avatar);
      loading.dismiss();

      if(!result){
        this.alertPresent('Carga de avatar fallida','Se ha producido un error, inténtelo más rato');
      }
    }
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK']
    });
    await alert.present();
  }

}
