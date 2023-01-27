import { NavController } from '@ionic/angular';
import { JsonService } from './../../services/json.service';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any = null;
  usuario: any = null;
  constructor(private profileService: ProfileService,
    private JsonService:JsonService,
    private navController:NavController) { }

  ngOnInit() {
    this.loadProfile();
    this.getprofile();
  }

  loadProfile(){
    this.profileService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
      console.log(respuesta);
    });
  }
  
  getprofile(): void {
    this.JsonService.getuser()
      .then(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

  getDetalle(user:any): void { 
    const navigationExtras: NavigationExtras = {
      queryParams: {
        user : JSON.stringify(user)
      }      
    };
    this.navController.navigateForward(['editar/'],navigationExtras);
  }



}
