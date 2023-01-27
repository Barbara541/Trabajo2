import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {
  json:any=[];
  base='CLP';
  cont2='CLP';
  resultado:string='1';

  changebase(a:string)
  {
    this.base=a;
  }

  tocountry(b:string)
  {
   this.cont2 = b;
  }
  constructor(private api:RecipesService,
    private toastController: ToastController,
    private router : Router) { }

  ngOnInit() {
  }
  convert()
  {
   this.api.getmoneda(this.base).subscribe(data => {
  
    this.json=JSON.stringify(data);
    this.json = JSON.parse(this.json)
    console.log(this.json);
    this.resultado = this.json.rates.CLP
   })
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
    
}
