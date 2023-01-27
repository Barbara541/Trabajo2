import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { last } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  center: any = {
    lat: -33.4727879,
    lng: -70.6298313,
  };
  markerid!: string;
  

  clima: any = [];
  fechaCorta: string = new Date().toISOString();
  fecha: string = this.fechaCorta;

  
  constructor(private ApiService:RecipesService,
    private toastController: ToastController,
    private router : Router) {   this.getclimasantiago();}
  
    ngOnInit() {
    console.log(this.getclimasantiago)
    this.createMap();
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.googlemaps_api_key,
      config: {
        center: this.center,
        zoom: 13,
      },
    });
    this.createmarker(this.center.lat,this.center.lng)
  }

  async createmarker(lat: any,lng: any)
  {
    this.markerid=await this.newMap.addMarker({
      coordinate:{
        lat:lat,
        lng:lng,
      },
      draggable:true
    }); 
  }

  async removemarker()
  {
    await this.newMap.removeMarker(this.markerid);
  }
  
  getclimasantiago(): void {
    this.ApiService.getclima()
      .then(data => {
      this.clima = data;
      console.log(this.clima);
  });
  }

  async home()
  {
    const toast = await this.toastController.create({
      color : 'danger',
      message : "Volviendo al inicio",
      duration : 2000,
      position : 'top',
      icon: 'exit-outline'
    })
    toast.present()
    this.router.navigate(['/home']);
  }
  ubicacion()
  {
    
  }
}
