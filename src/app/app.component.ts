import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Conversion', url: '/conversion', icon: 'cash' },
    { title: 'Weather', url: '/weather', icon: 'cloud'},
    { title: 'Recetas', url: '/lista', icon: 'restaurant'},
    { title: 'Profile', url: '/profile', icon: 'person'},
  ];


  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private authService: AuthService,
    private router:Router) 
    {
    this.presentSplash();
  }

  async presentSplash(){
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async logout(){
    this.authService.logout();

    const toast = await this.toastController.create({
      color : 'danger',
      message : "Cerrando sesion",
      duration : 2000,
      position : 'top',
      icon: 'exit-outline'
    })
    toast.present()
    this.router.navigate(['/login']);
  }
}
